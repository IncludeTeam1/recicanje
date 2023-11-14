import { useEffect, useState } from 'react';
import { AvatarUser } from '../AvatarUser';
// import { respuestaDePublicaciones } from '../../../constants/respuestasDeEjemplo';
import { TarjetaPublicacion } from './TarjetaPublicacion';
import { FormularioPublicacion } from './FormularioPublicacion';

import { LoaderReci } from '../LoaderReci.jsx';
import { usePublicaciones } from '../../../hooks/usePublicaciones.js';

function SeccionPublicaciones({ user = {}, uid = '' }) {
  const [abrirModalPublicacion, setAbrirModalPublicacion] = useState(false);

  const [page, setPage] = useState(1);

  const {
    publicaciones,
    loading,
    fetchPublicaiones,
    nextLoading,
    hayMasPublicaciones,
  } = usePublicaciones({
    uid,
    page,
  });

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
              <h2>No hay publicaciones aún</h2>
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
