import { useEffect, useState } from 'react';
import { AvatarUser } from '../AvatarUser';
// import { respuestaDePublicaciones } from '../../../constants/respuestasDeEjemplo';
import { TarjetaPublicacion } from './TarjetaPublicacion';
import { FormularioPublicacion } from './FormularioPublicacion';

import { LoaderReci } from '../LoaderReci.jsx';
import { usePublicaciones } from '../../../hooks/usePublicaciones.js';
import { NOMBRE_APP } from '../../../config.js';

function SeccionPublicaciones({ user = {}, _id = '' }) {
  const [abrirModalPublicacion, setAbrirModalPublicacion] = useState(false);
  const userInSesion = JSON.parse(
    localStorage.getItem(`${NOMBRE_APP}-userData`)
  );
  const [page, setPage] = useState(1);
  console.log(user);
  const {
    publicaciones,
    loading,
    fetchPublicaiones,
    nextLoading,
    hayMasPublicaciones,
  } = usePublicaciones({
    _id,
    page,
  });

  console.log(publicaciones);

  return (
    <>
      {abrirModalPublicacion && (
        <FormularioPublicacion
          open={abrirModalPublicacion}
          setOpen={setAbrirModalPublicacion}
          refresh={fetchPublicaiones}
          user={user}
        />
      )}
      <main className="w-full min-w-[300px] flex flex-col gap-3 md:w-auto flex-grow ">
        {/* Menú para subir una publicación */}

        {(user.uid === userInSesion.uid || _id === '') && (
          <div className="bg-white rounded-md w-full p-3 shadow-lg">
            {/* <--Boton principal--> */}
            <div className="flex gap-1">
              <AvatarUser user={user} />

              <button
                onClick={() => {
                  setAbrirModalPublicacion(!abrirModalPublicacion);
                }}
                className="flex-grow text-left pl-3 border rounded-[25PX] hover:bg-gray-200 transition-all"
              >
                Crear publicación
              </button>
            </div>
          </div>
        )}
        {/* Publicaciones */}

        {loading ? (
          <div className=" w-full  flex items-center text-center">
            <LoaderReci />
          </div>
        ) : (
          <section className=" flex flex-col gap-5 ">
            {publicaciones.length > 0 ? (
              publicaciones.map((p) => {
                return (
                  <TarjetaPublicacion
                    refresh={fetchPublicaiones}
                    client:only
                    key={p._id}
                    publicacion={p}
                  />
                );
              })
            ) : (
              <div className="">
                <h2
                  className="text-xl block text-center font-bold
                  p-2
                "
                >
                  No hay publicaciones{' '}
                </h2>
              </div>
            )}

            {/* Cargar más publicaciones */}
            {hayMasPublicaciones ? (
              nextLoading ? (
                <LoaderReci />
              ) : (
                <button
                  onClick={() => {
                    setPage((old) => old + 1);
                  }}
                >
                  Cargar más
                </button>
              )
            ) : null}
          </section>
        )}
      </main>
    </>
  );
}

export { SeccionPublicaciones };
