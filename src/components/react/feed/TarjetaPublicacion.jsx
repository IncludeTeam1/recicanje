import { useEffect, useState } from 'react';

import { ReciclarIcon } from '../../../icons/ReciclarIcon';
import { ComentarioIcon } from '../../../icons/ComentarioIcon';

import { MultimediaPublicacion } from './MultimediaPublicacion';
import { TextoPublicacion } from './TextoPublicacion';
import { HeaderPublicacion } from './HeaderPublicacion';
import { InteraccionPublicacion } from './InteraccionPublicacion';
import { NOMBRE_APP } from '../../../config';

function TarjetaPublicacion({ refresh, publicacion = {} }) {
  /* También hay que verificar si es un video, una imagen, y si son varios */
  const [currentPublicacion, setCurrentPublicacion] = useState(publicacion); // Uso este estado para la actualización de la publicación
  const [openComentario, setOpenComentario] = useState(false);

  const userInSesion = JSON.parse(
    localStorage.getItem(`${NOMBRE_APP}-userData`)
  );
  const [imagenes, setImagenes] = useState(
    currentPublicacion.contenido.multimedia
  );
  // console.log(imagenes)
  const noTieneImagenes = currentPublicacion.contenido.multimedia.length <= 0;

  const [comentarios, setComentarios] = useState(
    currentPublicacion.comentarios.length
  );

  useEffect(() => {
    setComentarios(currentPublicacion.comentarios.length);
  }, [currentPublicacion]);

  return (
    <div className="bg-white  rounded-md shadow-md">
      <HeaderPublicacion refresh={refresh} publicacion={currentPublicacion} />

      <main className=" flex flex-col gap-3">
        <TextoPublicacion publicacion={currentPublicacion} />

        {/* Sección de multimedia */}
        {!noTieneImagenes && (
          <MultimediaPublicacion
            publicacion={currentPublicacion}
            imagenes={imagenes}
          />
        )}
        {/* Estadisticas */}
        <div className="flex p-3 justify-between">
          {currentPublicacion.cantidadMeGustas ? (
            <p className="flex items-center justify-center text-sm cursor-pointer hover:underline hover:underline-offset-2 transition-all">
              <ReciclarIcon className="stroke-emerald-700 w-4" />{' '}
              <span> {currentPublicacion.cantidadMeGustas}</span>
            </p>
          ) : (
            <p className="text-[12px]">Sé el primero/a en dar me gusta</p>
          )}

          {comentarios ? (
            <button
              onClick={() => {
                setOpenComentario(!openComentario);
              }}
              className="flex items-center justify-center text-sm cursor-pointer hover:underline hover:underline-offset-2 transition-all"
            >
              <ComentarioIcon className="stroke-sky-700 w-4" />{' '}
              <span>
                {' '}
                {comentarios} {comentarios > 1 ? 'comentarios' : 'comentario'}
              </span>
            </button>
          ) : null}
        </div>
      </main>

      {/* Interacciones */}
      <InteraccionPublicacion
        publicacion={currentPublicacion}
        user_id={userInSesion._id}
        setCurrentPublicacion={setCurrentPublicacion}
        openComentario={openComentario}
        setOpenComentario={setOpenComentario}
      />
    </div>
  );
}

export { TarjetaPublicacion };
