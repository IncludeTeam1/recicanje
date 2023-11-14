import { useEffect, useState } from 'react';
import { AvatarUser } from './AvatarUser';
import { NOMBRE_APP } from '../../config';

function SugerenciasContactos({ user = {}, limit = 4 }) {
  const [sugerencias, setSugerencias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usuarioSesion = JSON.parse(
      localStorage.getItem(`${NOMBRE_APP}-userData`)
    );

    setLoading(true);
    fetch(`/api/usuarios/obtenerSugerencias?limit=${limit}`)
      .then((res) => res.json())
      .then(({ usuarios }) => {
        const data = usuarios.filter(
          (usuario) => usuario.uid !== usuarioSesion.uid
        );

        setSugerencias(data);
      })

      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <article class=" hidden lg:flex lg:w-[200px] xl:w-[250px] flex-shrink-0 rounded-xl overflow-hidden bg-white shadow-md">
      {loading ? (
        <p className="text-center grid animate-pulse place-content-center w-full min-h-[100px]">
          Cargando...
        </p>
      ) : sugerencias.length < 1 ? (
        <p>No hay personas</p>
      ) : (
        <div className="flex flex-col  w-full gap-3 ">
          {sugerencias
            .filter((u) => u.uid !== user.uid)
            .map((sugerencia) => {
              return (
                /* Enlace para llevar al perfil del usuario */
                <a
                  href={`/perfil/${sugerencia.uid}`}
                  className="flex items-center justify-between gap-2 p-3 
                hover:bg-gray-100 w-full  cursor-pointer transition
                "
                  key={sugerencia.uid + sugerencia._id}
                >
                  <div className="flex gap-1 items-center">
                    <AvatarUser className="w-8 h-8" user={sugerencia} />
                    <p className="text-sm"> {sugerencia.displayName} </p>
                  </div>
                  <button className="bg-sky-600 rounded-full p-1 text-center text-sm">
                    ➕
                  </button>
                </a>
              );
            })}

          <a
            href="/mi-red"
            className="text-center text-sm underline underline-offset-2 pb-2 
            hover:text-sky-600 hover:scale-105 transition
            "
          >
            Mostrar más
          </a>
        </div>
      )}
    </article>
  );
}

export { SugerenciasContactos };
