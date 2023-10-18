import { useState } from "react";
import { AvatarUser } from "../AvatarUser";
import { ReciclarIcon } from "../../../icons/ReciclarIcon";
import { ComentarioIcon } from "../../../icons/ComentarioIcon";

function TarjetaPublicacion({ publicacion = {} }) {
  console.log(publicacion);

  /* También hay que verificar si es un video, una imagen, y si son varios */

  const [imagenes, setImagenes] = useState(publicacion.contenido.multimedia);
  const noTieneImagenes = publicacion.contenido.multimedia.length <= 0;

  /* Estados que solo contienen la cantidad de los me gustas y comentarios */
  const [meGustas, setMeGustas] = useState(publicacion.meGustas.length);
  const [comentarios, setComentarios] = useState(
    publicacion.comentarios.length
  );

  return (
    <div className="bg-white p-3 rounded-md shadow-md">
      <header className="flex gap-2 items-center border-b pb-2">
        <AvatarUser /> <span>{publicacion.autor.displayName}</span>
      </header>

      <main className="p-3 flex flex-col gap-3">
        <p className="text-sm lg:text-base ">{publicacion.contenido.texto}</p>
        {/* Sección de multimedia */}
        <div>
          {!noTieneImagenes ? (
            imagenes.length > 1 ? (
              imagenes.map((i) => {
                return (
                  <img
                    className="object-cover  "
                    src={i}
                    alt={`Publicación del usuario ${publicacion.displayName}`}
                  />
                );
              })
            ) : (
              <img
                className="object-cover  "
                src={imagenes[0]}
                alt={`Publicación del usuario ${publicacion.autor.displayName}`}
              />
            )
          ) : null}
        </div>
        {/* Interacciones */}
        <div className="flex justify-between">
          {meGustas ? (
            <p className="flex items-center justify-center text-sm cursor-pointer hover:underline hover:underline-offset-2 transition-all">
              <ReciclarIcon className="stroke-emerald-700 w-4" />{" "}
              <span> {meGustas}</span>
            </p>
          ) : (
            <p className="text-[12px]">Sé el primero/a en dar me gusta</p>
          )}

          {comentarios ? (
            <p className="flex items-center justify-center text-sm cursor-pointer hover:underline hover:underline-offset-2 transition-all">
              <ComentarioIcon className="stroke-sky-700 w-4" />{" "}
              <span>
                {" "}
                {comentarios} {comentarios > 1 ? "comentarios" : "comentario"}
              </span>
            </p>
          ) : null}
        </div>
      </main>

      <footer>
        <div className="flex justify-around">
          <button
            className="flex items-center gap-1 group hover:text-green-700
          hover:scale-x-105 p-2  hover:bg-gray-100  rounded-md flex-grow justify-center
          transition-all 
          "
          >
            <ReciclarIcon className="group-hover:stroke-green-700" />{" "}
            <span>Me gusta</span>
          </button>

          <button
            className="flex items-center gap-1 group hover:text-sky-700
          hover:scale-x-105 p-2  hover:bg-gray-100  rounded-md flex-grow justify-center
          transition-all 
          "
          >
            <ComentarioIcon className="group-hover:stroke-sky-700" />{" "}
            <span>Comentar</span>
          </button>

          <button
            className="flex items-center gap-1 group hover:text-sky-700
          hover:scale-x-105 p-2  hover:bg-gray-100  rounded-md flex-grow justify-center
          transition-all 
          "
          >
            <ReciclarIcon className="group-hover:stroke-green-700" />{" "}
            <span>Me gusta</span>
          </button>
        </div>

        {/* Acciones */}
      </footer>
    </div>
  );
}

export { TarjetaPublicacion };
