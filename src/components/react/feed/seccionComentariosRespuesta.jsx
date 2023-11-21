import { useEffect, useState } from 'react';
import { TarjetaComentario } from './TarjetaComentario';

function SeccionComentariosRespuesta({ comentarioPadre }) {
  /* En este caso recibe los ids de los comentarios para hacer la petición */
  // console.log({ comentarioPadre });
  // console.log({ comentarioPadre });

  const [comentarios, setComentarios] = useState(
    comentarioPadre?.comentariosRespuesta.slice(0, 2)
  ); // que muestre dos y la paginación también va a hace de dos en dos

  const [limit, setLimit] = useState(2);
  const [page, setPage] = useState(1);
  const [ctComentarios, setCtComentarios] = useState(
    comentarioPadre.comentariosRespuesta.length
  );
  const [hayMasComentarios, setHayMasComentarios] = useState(
    ctComentarios > comentarios?.length
  );

  /* Eliminar comentario */
  async function handleDeleteRespuesta({ comentario_id }) {
    const res = await fetch(`/api/comentarios/eliminarComentarioRespuesta`, {
      method: 'DELETE',
      body: JSON.stringify({
        comentario_id,
        comentarioPadre_id: comentarioPadre._id,
      }),
    });
    const data = await res.json();
    if (res.status === 200) {
      setComentarios(data.comentario.comentariosRespuesta);
    }
  }
  function handlePaginacion() {
    /* Calcular cuantos comentarios hay para el offset */
    console.log({ page });
    const cuantosComentariosQuedan = ctComentarios - comentarios?.length;
    if (cuantosComentariosQuedan <= 0) {
      return setHayMasComentarios(false);
    }
    setPage((old) => old + 1);
  }
  function fetchComentarios() {
    fetch(`/api/comentarios/obtenerComentariosRespuesta`, {
      method: 'POST',
      body: JSON.stringify({
        comentario_id: comentarioPadre?._id,
        page: 1,
        limit,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // setHayMasComentarios(data.comentarios.length < ctComentarios);
        // console.log(data.comentarios);
        setComentarios(data.comentarios);
      });
  }
  useEffect(() => {
    fetchComentarios();
  }, [comentarioPadre]);

  /* Paginación */
  useEffect(() => {
    if (page === 1) return;
    fetch(`/api/comentarios/obtenerComentariosRespuesta`, {
      method: 'POST',
      body: JSON.stringify({
        comentario_id: comentarioPadre?._id,
        page,
        limit,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setComentarios((old) => {
          const newComentarios = old.concat(data.comentarios);
          setHayMasComentarios(newComentarios.length < ctComentarios);
          return newComentarios;
        });
      });
  }, [page]);

  return (
    <div className="w-[98%] ml-auto border-l py-1">
      {comentarios?.length > 0 &&
        comentarios.map((comentario) => {
          return (
            <TarjetaComentario
              handleDeleteRespuesta={handleDeleteRespuesta}
              comentario={comentario}
              comentarioRespuesta={{
                esRespuesta: true,
                comentario_id: comentarioPadre?._id,
                usuarioRespuesta: comentario?.usuarioRespuesta,
                setComentariosRespuesta: fetchComentarios,
              }}
            />
          );
        })}
      {hayMasComentarios && (
        <button
          className="text-[12px] hover:underline block ml-auto mr-4 "
          onClick={handlePaginacion}
        >
          Mostrar más{' '}
        </button>
      )}
    </div>
  );
}

export { SeccionComentariosRespuesta };
