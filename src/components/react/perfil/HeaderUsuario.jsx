import { useState } from 'react';
import { NOMBRE_APP } from '../../../config';
import { mesesDelAño } from '../../../constants/mesesDelAño';
import { CalendarioIcon } from '../../../icons/CalendarioIcon';
import { AvatarUser } from '../AvatarUser';
import { FormularioActualizar } from './FormularioActualizar';

const portadaDefecto =
  'https://i.pinimg.com/550x/70/45/60/7045605ab117e78aa27d00f99e033b18.jpg';

function HeaderUsuario({ infoUsuario }) {
  const infoUsuarioSesion = JSON.parse(
    localStorage.getItem(`${NOMBRE_APP}-userData`)
  );

  const [abrirModal, setAbrirModal] = useState(false);

  function handleModal(e) {
    setAbrirModal(!abrirModal);
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
          {infoUsuario?.uid === infoUsuarioSesion?.uid && (
            <button
              onClick={handleModal}
              className="p-3 rounded-3xl border border-emerald-950
          mt-3 mr-3 hover:scale-105 transition-all shadow-md"
            >
              Editar perfil
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
