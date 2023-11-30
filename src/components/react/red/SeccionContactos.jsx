import { useEffect, useState } from 'react';

import { NOMBRE_APP } from '../../../config.js';
import { BotonAccion } from '../BotonAccion.jsx';
import { TarjetaContacto } from './TarjetaContacto.jsx';
import { ReciclarIcon } from '../../../icons/ReciclarIcon.jsx';

export const ACCIONES_CONECTAR = {
  pendiente: 'Pendiente',
  sugerencia: 'Sugerencia',
  confirmar: 'Confirmar',
};

const TITULOS_SECCION = {
  pendiente: 'Solicitudes enviadas',
  sugerencia: 'Gente que quizas conozcas.',
  confirmar: 'Solicitudes recibidas',
};

function SeccionContactos() {
  const [sugerencias, setSugerencias] = useState([]); // arreglo que se va a renderizar si ó si
  const [loading, setLoading] = useState(false);

  const [seccionActiva, setSeccionActiva] = useState(
    ACCIONES_CONECTAR.sugerencia
  );

  const userInSesion = JSON.parse(
    localStorage.getItem(`${NOMBRE_APP}-userData`)
  );

  /* Traer sugerencias */
  useEffect(() => {
    let url = `/api/usuarios/obtenerSugerencias`; // por defecto traer las sugerencias

    if (seccionActiva === ACCIONES_CONECTAR.pendiente) {
      url = `/api/usuarios/obtenerPendientes`;
    } else if (seccionActiva === ACCIONES_CONECTAR.confirmar) {
      url = `/api/usuarios/obtenerConfirmar`;
    }
    setLoading(true);
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ user_id: userInSesion._id }),
    })
      .then((res) => res.json())
      .then(({ usuarios }) => {
        setSugerencias(usuarios);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [seccionActiva]);

  /* Mandar sesión de pendiente */
  async function handleConectar(usuarioAConectar) {
    const res = await fetch(`/api/usuarios/conectarUsuario`, {
      method: 'POST',
      body: JSON.stringify({
        usuarioInSesion: userInSesion._id,
        usuarioAConectar: usuarioAConectar._id,
      }),
    });

    const resData = await res.json();
    setSeccionActiva(ACCIONES_CONECTAR.pendiente);
    console.log(resData);
  }

  /* Cuando el usuario quiere cancelar la solicitud que ha enviado */
  async function handlePendiente(usuarioAConectar) {
    const res = await fetch(`/api/usuarios/conectarUsuario`, {
      method: 'DELETE',
      body: JSON.stringify({
        usuarioInSesion: userInSesion._id,
        usuarioAConectar: usuarioAConectar._id,
      }),
    });

    const resData = await res.json();
    setSeccionActiva(ACCIONES_CONECTAR.sugerencia);
    console.log(resData);
  }

  /* Cuando quiere confirmar la solicitud, crear la conexión y mostrar chat. */
  async function handleConfirmar(usuarioAConectar) {
    const res = await fetch(`/api/usuarios/conectarUsuario`, {
      method: 'PUT',
      body: JSON.stringify({
        usuarioInSesion: userInSesion._id,
        usuarioAConectar: usuarioAConectar._id,
      }),
    });

    const resData = await res.json();
    setSeccionActiva(ACCIONES_CONECTAR.sugerencia);
    console.log(resData);
  }

  return (
    <section className="border p-5 w-full bg-white">
      <h2
        className="text-xl md:text-2xl font-semibold 
      bg-gradient-to-r from-teal-400 to-teal-800 bg-clip-text text-transparent 
      "
      >
        {TITULOS_SECCION[seccionActiva.toLowerCase()]}
      </h2>
      <div className="flex justify-around py-2">
        <BotonAccion
          onClick={() => setSeccionActiva(ACCIONES_CONECTAR.sugerencia)}
          className={`${
            seccionActiva === ACCIONES_CONECTAR.sugerencia
              ? 'scale-105 shadow-xl border'
              : ''
          }`}
        >
          Sugerencias
        </BotonAccion>

        <BotonAccion
          onClick={() => setSeccionActiva(ACCIONES_CONECTAR.pendiente)}
          className={`${
            seccionActiva === ACCIONES_CONECTAR.pendiente
              ? 'scale-105 shadow-xl border'
              : ''
          }`}
        >
          Pendientes
        </BotonAccion>

        <BotonAccion
          onClick={() => setSeccionActiva(ACCIONES_CONECTAR.confirmar)}
          className={`${
            seccionActiva === ACCIONES_CONECTAR.confirmar
              ? 'scale-105 shadow-xl border'
              : ''
          }`}
        >
          Recibidas
        </BotonAccion>
      </div>

      {loading ? (
        <div className="animate-spin flex justify-center">
          <ReciclarIcon className="w-20 h-20 stroke-teal-950 animate-spin" />
        </div>
      ) : (
        <div className="w-full  grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2">
          {/* Renderizo Sugerencias */}
          {seccionActiva === ACCIONES_CONECTAR.sugerencia &&
            (sugerencias.length > 0 ? (
              sugerencias.map((u) => {
                return (
                  <TarjetaContacto
                    key={u._id}
                    handleClik={handleConectar}
                    type={seccionActiva}
                    usuario={u}
                  />
                );
              })
            ) : (
              <div className="text-xl text-center flex justify-center col-span-2 md:col-span-3 lg:col-span-4  w-full">
                <p>No hay contactos</p>
              </div>
            ))}

          {seccionActiva === ACCIONES_CONECTAR.pendiente &&
            (sugerencias.length > 0 ? (
              sugerencias.map((u) => {
                return (
                  <TarjetaContacto
                    key={u._id}
                    type={seccionActiva}
                    handleClik={handlePendiente}
                    usuario={u}
                  />
                );
              })
            ) : (
              <div className="text-xl text-center flex justify-center col-span-2 md:col-span-3 lg:col-span-4  w-full">
                <p>No hay contactos pendientes</p>
              </div>
            ))}

          {seccionActiva === ACCIONES_CONECTAR.confirmar &&
            (sugerencias.length > 0 ? (
              sugerencias.map((u) => {
                return (
                  <TarjetaContacto
                    key={u._id}
                    type={seccionActiva}
                    handleClik={handleConfirmar}
                    usuario={u}
                  />
                );
              })
            ) : (
              <div className="text-xl text-center flex justify-center col-span-2 md:col-span-3 lg:col-span-4  w-full">
                <p>No hay usuarios a confirmar</p>
              </div>
            ))}
        </div>
      )}
    </section>
  );
}

export { SeccionContactos };
