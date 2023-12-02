import { useEffect, useState } from 'react';
import { AvatarUser } from './AvatarUser';
import { NOMBRE_APP } from '../../config';

function SugerenciasContactos({ user = {}, limit = 4 }) {
  const [sugerencias, setSugerencias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingConect, setLoadingConect] = useState(false);

  const usuarioSesion = JSON.parse(
    localStorage.getItem(`${NOMBRE_APP}-userData`)
  );

  function fetchSugerencias() {
    setLoading(true);
    fetch(
      `/api/usuarios/obtenerSugerencias?limit=${limit}&_id=${usuarioSesion._id}`
    )
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
  }

  useEffect(() => {
    fetchSugerencias();
  }, []);

  async function handleConectar(usuarioAConectar) {
    setLoadingConect(true);
    try {
      const res = await fetch(`/api/usuarios/conectarUsuario`, {
        method: 'POST',
        body: JSON.stringify({
          usuarioInSesion: usuarioSesion._id,
          usuarioAConectar: usuarioAConectar._id,
        }),
      });

      const resData = await res.json();

      if (res.status === 200) {
        fetchSugerencias();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingConect(false);
    }
  }

  return (
    <article className=" hidden lg:flex lg:w-[200px] xl:w-[250px] flex-shrink-0 rounded-xl overflow-hidden bg-white shadow-md ">
      {loading ? (
        <p className="text-center grid animate-pulse place-content-center w-full min-h-[100px]">
          Cargando...
        </p>
      ) : sugerencias?.length < 1 ? (
        <div className="p-2">
          <p className=" text-center">No hay personas</p>
        </div>
      ) : (
        <div className="flex flex-col  w-full gap-3 ">
          {sugerencias.map((sugerencia) => {
            return (
              /* Enlace para llevar al perfil del usuario */
              <div
                key={sugerencia.uid + sugerencia._id}
                className="flex items-center justify-between gap-2 p-3
              hover:bg-gray-100 w-full  cursor-pointer transition"
              >
                <a
                  href={`/perfil/${sugerencia.uid}`}
                  className="flex items-center justify-between gap-2 
                  hover:bg-gray-100 w-full  cursor-pointer transition
                  "
                >
                  <div className="flex gap-1 items-center">
                    <AvatarUser className="w-8 h-8" user={sugerencia} />
                    <p className="text-sm"> {sugerencia.displayName} </p>
                  </div>
                </a>
                <button
                  disabled={loadingConect}
                  onClick={() => {
                    handleConectar(sugerencia);
                  }}
                  className={`bg-sky-600 rounded-full p-1 text-center text-sm ${
                    loadingConect && 'opacity-70 cursor-wait'
                  } hover:scale-95 brightness-105 transition-all`}
                >
                  ➕
                </button>
              </div>
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
