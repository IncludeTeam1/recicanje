import { useEffect, useState } from 'react';
import { ComentarioIcon } from '../../../icons/ComentarioIcon';
import { ReciclarIcon } from '../../../icons/ReciclarIcon';
import { NOMBRE_APP } from '../../../config';
import { AvatarUser } from '../AvatarUser';
import { SeccionComentariosPublicacion } from './SeccionComentariosPublicacion';

function InteraccionPublicacion({
  user_id = '',
  publicacion,
  setCurrentPublicacion,
  openComentario,
  setOpenComentario,
}) {
  const userInSesion = JSON.parse(
    localStorage.getItem(`${NOMBRE_APP}-userData`)
  );
  async function handleMeGusta(e) {
    const res = await fetch(`/api/publicaciones/actualizarPublicacion`, {
      method: 'PUT',
      body: JSON.stringify({
        publicacion_id: publicacion._id,
        user_id,
        accion: 'me_gusta',
      }),
    });

    const data = await res.json();
    if (res.status === 200) {
      /* Refrescar la publicación */
      setCurrentPublicacion(data.publicacion); // refrescamos la publicación
    }
  }

  const [yaDiMeGusta, setYaDiMeGusta] = useState(null);

  useEffect(() => {
    /* No puede ser que haga esto en el lado del front, pero ya casí hay que entregarlo, podría usar un useCallback
    sin embargo lo mejor es hacerlo del lado del servidor */
    const yaDiMg = publicacion.meGustas.some(
      (mg) => mg.autor.toString() === user_id
    );
    setYaDiMeGusta(yaDiMg);
  }, [publicacion]);

  return (
    <footer>
      <div className="flex justify-around gap-5 p-3">
        <button
          onClick={handleMeGusta}
          className={`flex items-center gap-1 group hover:text-green-700
          hover:scale-x-105 p-2  hover:bg-gray-100  rounded-md flex-grow w-6/12 justify-center
          transition-all ${
            yaDiMeGusta
              ? `bg-gradient-to-t from-gray-200 to-gray-50 text-green-600 hover:text-rose-700 hover:text-sm `
              : ''
          }`}
        >
          <ReciclarIcon
            className={`group-hover:stroke-green-700 ${
              yaDiMeGusta ? 'stroke-green-600 group-hover:stroke-rose-700 ' : ''
            }`}
          />{' '}
          <span
            className={`${
              yaDiMeGusta
                ? 'group-hover:before:content-["Ya_no_me_gusta"] before:content-["Me_gusta"]'
                : 'before:content-["Me_gusta"]'
            } `}
          ></span>
        </button>

        <button
          onClick={() => {
            setOpenComentario(!openComentario);
          }}
          className={`flex items-center gap-1 group hover:text-sky-700
          hover:scale-x-105 p-2  hover:bg-gray-100  rounded-md flex-grow justify-center
            transition-all w-6/12 ${
              openComentario &&
              'text-blue-700 bg-gradient-to-b from-gray-200 to-gray-50'
            }`}
        >
          <ComentarioIcon
            className={`group-hover:stroke-sky-700 ${
              openComentario && 'stroke-blue-700'
            }`}
          />{' '}
          <span>Comentar</span>
        </button>
      </div>

      {/* Sección comentarios */}
      {openComentario && (
        <SeccionComentariosPublicacion
          user={userInSesion}
          publicacion={publicacion}
          setCurrentPublicacion={setCurrentPublicacion}
        />
      )}
    </footer>
  );
}

export { InteraccionPublicacion };
