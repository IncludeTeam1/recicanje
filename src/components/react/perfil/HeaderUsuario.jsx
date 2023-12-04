import { useEffect, useState } from 'react';
import { BASE_URL_API, NOMBRE_APP } from '../../../config';
import { mesesDelAño } from '../../../constants/mesesDelAño';
import { CalendarioIcon } from '../../../icons/CalendarioIcon';
import { AvatarUser } from '../AvatarUser';
import { FormularioActualizar } from './FormularioActualizar';

const portadaDefecto =
  'https://i.pinimg.com/550x/70/45/60/7045605ab117e78aa27d00f99e033b18.jpg';

function HeaderUsuario({ infoUsuario }) {
  const [abrirModal, setAbrirModal] = useState(false);
  function handleModal(e) {
    setAbrirModal(!abrirModal);
  }

  const infoUsuarioSesion = JSON.parse(
    localStorage.getItem(`${NOMBRE_APP}-userData`)
  );
  /* Verificar si el usuario esta en su propio perfil. */

  const [accion, setAccion] = useState();

  const proprioPerfil = infoUsuario?.uid === infoUsuarioSesion?.uid;
  useEffect(() => {
    /* Verificar si se le ha mandado solicitud, o sí el otro usuario al usuario en sesión o si ya se le envia un mensaje, tener en cuenta que es al reves no estoy viendo los datos del usuario en sesión,
    si no los del usario al que se le vistia la página */
    const { solicitudesEnviadas } = infoUsuario;
    const { solicitudesRecibidas } = infoUsuario;
    const { usuariosConectados } = infoUsuario;
    if (usuariosConectados.length > 0) {
      const enviarMensaje = usuariosConectados.some(
        (_id) => _id === infoUsuarioSesion._id
      );
      if (enviarMensaje) {
        return setAccion('enviarMensaje');
      }
    }
    /* Si el usuario en sesión esta en las solicitudesEnviadas, entonces debería aceptar */
    if (solicitudesEnviadas.length > 0) {
      const pendiente = solicitudesEnviadas.some(
        (_id) => _id === infoUsuarioSesion._id
      );

      if (pendiente) {
        return setAccion('Confirmar');
      }
    }
    /* En cambio si esta en las solicitudes recibidas significa que el usuario en sesión le envio la 
    solicitud */
    if (solicitudesRecibidas.length > 0) {
      const confirmar = solicitudesRecibidas.some(
        (_id) => _id === infoUsuarioSesion._id
      );
      if (confirmar) {
        return setAccion('Pendiente');
      }
    }

    setAccion('Sugerencia');
  }, [infoUsuario]);

  const contenido = {
    Sugerencia: '➕ Conectar',
    Pendiente: '🕗 Pendiente',
    Confirmar: '✅ Confirmar',
    enviarMensaje: '📨 Enviar mensaje',
  };

  const clases = {
    Sugerencia: `border border-emerald-600 text-emerald-700
    px-3 py-2 rounded-3xl  hover:text-white hover:border-white hover:bg-emerald-600 transition`,

    Pendiente: `border border-gray-600 
    px-3 py-2 rounded-3xl  text-white hover:border-white hover:bg-gray-400 bg-gray-600 transition`,

    Confirmar: `border border-emerald-600 text-emerald-700 bg-emerald-100 
    px-3 py-2 rounded-3xl  hover:text-white hover:border-white hover:bg-emerald-600 transition`,

    enviarMensaje: `border border-sky-600 text-sky-700 bg-sky-100 
    px-3 py-2 rounded-3xl  hover:text-white hover:border-white hover:bg-sky-600 transition`,
  };
  /* Envia la solicitud al usuario */
  async function handleConectar(usuarioAConectar) {
    const res = await fetch(`/api/usuarios/conectarUsuario`, {
      method: 'POST',
      body: JSON.stringify({
        usuarioInSesion: infoUsuarioSesion._id,
        usuarioAConectar: usuarioAConectar._id,
      }),
    });

    const resData = await res.json();
    if (res.status === 200) {
      setAccion('Pendiente');
    }
  }

  /* Cuando el usuario quiere cancelar la solicitud que ha enviado */
  async function handlePendiente(usuarioAConectar) {
    const res = await fetch(`/api/usuarios/conectarUsuario`, {
      method: 'DELETE',
      body: JSON.stringify({
        usuarioInSesion: infoUsuarioSesion._id,
        usuarioAConectar: usuarioAConectar._id,
      }),
    });

    const resData = await res.json();
    if (res.status === 200) {
      setAccion('Sugerencia');
    }
    console.log(resData);
  }

  /* Cuando quiere confirmar la solicitud, crear la conexión y mostrar chat. */
  async function handleConfirmar(usuarioAConectar) {
    const res = await fetch(`/api/usuarios/conectarUsuario`, {
      method: 'PUT',
      body: JSON.stringify({
        usuarioInSesion: infoUsuarioSesion._id,
        usuarioAConectar: usuarioAConectar._id,
      }),
    });

    const resData = await res.json();
    if (res.status === 200) {
      setAccion('enviarMensaje');
    }
    console.log(resData);
  }

  function handleClik(u) {
    console.log({ u });
    console.log({ accion });
    if (accion === 'Sugerencia') {
      handleConectar(u);
    } else if (accion === 'Pendiente') {
      handlePendiente(u);
    } else if (accion === 'Confirmar') {
      handleConfirmar(u);
    } else if (accion === 'enviarMensaje') {
      window.location.assign(`${BASE_URL_API}/mensajes`);
    }
  }

  return (
    <>
      {abrirModal && (
        <FormularioActualizar
          setAbrirModal={setAbrirModal}
          user={infoUsuario}
        />
      )}

      <section className="bg-white shadow-md rounded-md flex-grow">
        {/* <!-- Portada --> */}
        <div
          // style=`background-image:url(${infoUsuario?.portadaURL || portadaDefecto});`
          style={{
            backgroundImage: `url(${
              infoUsuario?.portadaURL || portadaDefecto
            })`,
          }}
          className="bg-cover
        bg-no-repeat
        bg-center
        
        h-[300px]"
        ></div>

        {/* <!-- Acciones --> */}
        <div className="flex justify-between items-start h-[60px] md:h-[120px]">
          <AvatarUser
            className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] -translate-y-[50px]  md:-translate-y-[100px] translate-x-[10px] border-[5px] border-white "
            user={infoUsuario}
          />
          {proprioPerfil ? (
            <button
              onClick={handleModal}
              className="p-3 rounded-3xl border border-emerald-950
          mt-3 mr-3 hover:scale-105 transition-all shadow-md"
            >
              Editar perfil
            </button>
          ) : (
            <button
              className={`${clases[accion]} mt-3 mr-3`}
              onClick={() => {
                handleClik(infoUsuario);
              }}
            >
              {' '}
              {contenido[accion]}
            </button>
          )}
        </div>

        {/* <!-- Información del usuario --> */}
        <div className="flex flex-col gap-3 p-3 px-5">
          <p className="text-3xl font-mono font-bold flex flex-col">
            {infoUsuario?.displayName}
            <small className="text-sm font-serif text-gray-500">
              {infoUsuario?.correoElectronico}
            </small>
          </p>

          <div className="flex items-center flex-wrap gap-5 md:gap-10">
            <p className="text-sm whitespace-nowrap">
              {infoUsuario?.usuariosConectados.length}
              {infoUsuario?.usuariosConectados.length === 1
                ? ' contacto'
                : ' contactos'}
            </p>

            <p className="flex itemx-center text-sm whitespace-nowrap">
              <CalendarioIcon className="h-5 w-5 stroke-black" />
              Se unio en{' '}
              {mesesDelAño[new Date(infoUsuario?.fechaDeRegistro).getMonth()]}
              de {new Date(infoUsuario?.fechaDeRegistro).getFullYear()}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export { HeaderUsuario };
