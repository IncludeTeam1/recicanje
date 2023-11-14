import { useState } from 'react';
import AutoLinkText from 'react-autolink-text2';

import { AvatarUser } from '../AvatarUser';
import { ReciclarIcon } from '../../../icons/ReciclarIcon';
import { ComentarioIcon } from '../../../icons/ComentarioIcon';
import { BotonAccion } from '../BotonAccion';
import { NOMBRE_APP } from '../../../config';
import { MultimediaPublicacion } from './MultimediaPublicacion';
import { TextoPublicacion } from './TextoPublicacion';
import { HeaderPublicacion } from './HeaderPublicacion';

function TarjetaPublicacion({ refresh, publicacion = {} }) {
 

  /* También hay que verificar si es un video, una imagen, y si son varios */

  const [imagenes, setImagenes] = useState(publicacion.contenido.multimedia);
  // console.log(imagenes)
  const noTieneImagenes = publicacion.contenido.multimedia.length <= 0;

  /* Estados que solo contienen la cantidad de los me gustas y comentarios */
  const [meGustas, setMeGustas] = useState(publicacion.meGustas.length);
  const [comentarios, setComentarios] = useState(
    publicacion.comentarios.length
  );

  return (
    <div className="bg-white  rounded-md shadow-md">
      {/*       <header className="flex p-3 justify-between border-b pb-2 w-full">
        <a
          className="flex gap-2 w-  "
          href={`/perfil/${publicacion.autor.uid}`}
        >
          <AvatarUser user={publicacion.autor} fetchUser={true} />{' '}
          <p className="flex flex-col ">
            <span>{publicacion.autor.displayName}</span>
            <small className="text-[12px]">
              {' '}
              {publicacion.fechaPublicacion}
            </small>
          </p>
        </a>

        {usuarioSesion.uid === publicacion.autor.uid && (
          <div>
            <BotonAccion
              onClick={async (e) => {
                const conf = confirm('Seguro desea eliminar esta publicación?');
                if (conf) {
                  const res = await fetch(
                    `/api/publicaciones/eliminarPublicacion`,
                    {
                      method: 'DELETE',
                      body: JSON.stringify({
                        idPublicacion: publicacion._id,
                      }),
                    }
                  );
                  if (res.status === 200) {
                    alert('Publicación elimnada correctamente');
                    refresh();
                  } else {
                    alert('No se ha podido eliminar la publicación');
                  }
                }
              }}
              className=" flex justify-center items-center"
            >
              <span className="text-xl">🗑</span>
            </BotonAccion>
          </div>
        )}
      </header> */}

      <HeaderPublicacion publicacion={publicacion} />

      <main className=" flex flex-col gap-3">
        <TextoPublicacion publicacion={publicacion} />

        {/* Sección de multimedia */}
        {!noTieneImagenes && (
          <MultimediaPublicacion
            publicacion={publicacion}
            imagenes={imagenes}
          />
        )}
        {/* Estadisticas */}
        <div className="flex p-3 justify-between">
          {meGustas ? (
            <p className="flex items-center justify-center text-sm cursor-pointer hover:underline hover:underline-offset-2 transition-all">
              <ReciclarIcon className="stroke-emerald-700 w-4" />{' '}
              <span> {meGustas}</span>
            </p>
          ) : (
            <p className="text-[12px]">Sé el primero/a en dar me gusta</p>
          )}

          {comentarios ? (
            <p className="flex items-center justify-center text-sm cursor-pointer hover:underline hover:underline-offset-2 transition-all">
              <ComentarioIcon className="stroke-sky-700 w-4" />{' '}
              <span>
                {' '}
                {comentarios} {comentarios > 1 ? 'comentarios' : 'comentario'}
              </span>
            </p>
          ) : null}
        </div>
      </main>

      {/* Interacciones */}
      <footer>
        <div className="flex justify-around p-3">
          <button
            className="flex items-center gap-1 group hover:text-green-700
          hover:scale-x-105 p-2  hover:bg-gray-100  rounded-md flex-grow justify-center
          transition-all 
          "
          >
            <ReciclarIcon className="group-hover:stroke-green-700" />{' '}
            <span>Me gusta</span>
          </button>

          <button
            className="flex items-center gap-1 group hover:text-sky-700
          hover:scale-x-105 p-2  hover:bg-gray-100  rounded-md flex-grow justify-center
          transition-all 
          "
          >
            <ComentarioIcon className="group-hover:stroke-sky-700" />{' '}
            <span>Comentar</span>
          </button>

          <button
            className="flex items-center gap-1 group hover:text-sky-700
          hover:scale-x-105 p-2  hover:bg-gray-100  rounded-md flex-grow justify-center
          transition-all 
          "
          >
            <ReciclarIcon className="group-hover:stroke-green-700" />{' '}
            <span>Me gusta</span>
          </button>
        </div>

        {/* Acciones */}
      </footer>
    </div>
  );
}

export { TarjetaPublicacion };
