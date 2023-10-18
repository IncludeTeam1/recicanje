import { useEffect, useState } from "react";
import { AvatarUser } from "./AvatarUser";
import { respuestaDePublicaciones } from "../../constants/respuestasDeEjemplo";
import { TarjetaPublicacion } from "./feed/TarjetaPublicacion";

function Feed({ user = {} }) {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    [setPublicaciones(respuestaDePublicaciones)];
  }, []);

  return (
    <main className="w-full flex flex-col gap-3 md:w-auto flex-grow">
      {/* Menú para subir una publicación */}
      <div className="bg-white rounded-md w-full p-3 shadow-lg">
        {/* <--Boton principal--> */}
        <div className="flex gap-1">
          <AvatarUser user={user} />
          <button className="flex-grow text-left pl-3 border rounded-[25PX] hover:bg-gray-200 transition-all">
            Crear publicación
          </button>
        </div>
      </div>

      {/* Publicaciones */}

      <section className=" flex flex-col gap-5 ">
        {publicaciones.map((p) => {
          return (
            <TarjetaPublicacion client:visible key={p._id} publicacion={p} />
          );
        })}
      </section>
    </main>
  );
}

export { Feed };
