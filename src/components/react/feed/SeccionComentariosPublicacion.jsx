import { useEffect, useRef, useState } from 'react';

import { TarjetaComentario } from './TarjetaComentario';
function SeccionComentariosPublicacion({
  user,
  publicacion,
  setCurrentPublicacion,
}) {
  /* Paginación */
  const [ctComentarios, setCtComentarios] = useState(
    publicacion.comentarios.length
  );

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const [contenidoText, setContenidoText] = useState('');
  const [comentarios, setComentarios] = useState(
    publicacion.comentarios.slice(0, 2)
  ); // primero guarda los _id de los comentarios, sirve para hacer un efecto skeleton, después si hace la petición y trae los comentarios

  const [loadingCreate, setLoadingCreate] = useState(false);

  const [hayMasComentarios, setHayMasComentarios] = useState(
    ctComentarios > comentarios.length
  );

  /* Limpiar el contenido del input */
  const inputRef = useRef(null);

  const manejarInput = (e) => {
    setContenidoText(e.target.innerHTML);
  };
  /* Crear comentario */
  async function handleCreateComment(e) {
    if (contenidoText.trim().length === 0) {
      return alert('No se puede enviar un comentario vacio');
    }
    try {
      setLoadingCreate(true);
      const data = {
        autor: user._id,
        contenido: {
          texto: contenidoText,
        },
      };

      const res = await fetch(`/api/comentarios/crearComentario`, {
        method: 'POST',
        body: JSON.stringify({
          data,
          publicacion_id: publicacion._id,
        }),
      });
      const resData = await res.json();
      if (res.status === 200) {
        setContenidoText('');
        inputRef.current.textContent = '';
        setCurrentPublicacion(resData.updatePublicacion); // actualiza la publicación actual
        setComentarios(resData.updatePublicacion.comentarios);
        setCtComentarios(resData.updatePublicacion.comentarios.length);
      }
    } catch (error) {
      console.log(error);
      alert('Ha ocurrido un error');
    } finally {
      setLoadingCreate(false);
    }
  }

  /* Eliminar comentario */
  async function handleDelete({ comentario_id }) {
    const res = await fetch(`/api/comentarios/eliminarComentario`, {
      method: 'DELETE',
      body: JSON.stringify({
        comentario_id,
        publicacion_id: publicacion._id,
      }),
    });
    const data = await res.json();
    if (res.status === 200) {
      console.log(data.publicacion.comentarios.length < ctComentarios);
      setCurrentPublicacion(data.publicacion);
      setCtComentarios(data.publicacion.comentarios.length);
      setComentarios(data.publicacion.comentarios);
    }
  }

  function fetchComentarios() {
    fetch(`/api/comentarios/obtenerComentarios`, {
      method: 'POST',
      body: JSON.stringify({
        publicacion_id: publicacion._id,
        page,
        limit,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setHayMasComentarios(data.comentarios.length < ctComentarios);
        setComentarios(data.comentarios);
      });
  }

  function handlePaginacion() {
    /* Calcular cuantos comentarios hay para el offset */
    const cuantosComentariosQuedan = ctComentarios - comentarios.length;
    if (cuantosComentariosQuedan <= 0) {
      return setHayMasComentarios(false);
    }
    setPage((old) => old + 1);
  }

  /* Primer render */
  useEffect(() => {
    /* Trae los comentarios */
    if (publicacion.comentarios.length > 0) {
      fetchComentarios();
    }
  }, []);

  /* Paginación */
  useEffect(() => {
    if (page === 1) return;
    fetch(`/api/comentarios/obtenerComentarios`, {
      method: 'POST',
      body: JSON.stringify({
        publicacion_id: publicacion._id,
        page,
        limit,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setComentarios((old) => {
          const newComentarios = old.concat(data.comentarios);
          setHayMasComentarios(newComentarios.length < ctComentarios);
          return newComentarios;
        });
      });
  }, [page]);

  return (
    <section>
      <div className="p-2 flex flex-col gap-3  ">
        <p
          ref={inputRef}
          onInput={manejarInput}
          // onKeyDown={manejarKeyPress}
          className={`cursor-text outline-none   ${
            contenidoText === ''
              ? "before:[content:'Añadir_un_comentario...😉']"
              : ''
          } before:absolute  before:text-gray-500 p-3 border  max-h-[200px] overflow-y-auto whitespace-pre-wrap rounded-3xl
        `}
          data-gramm="false"
          contentEditable
          aria-label="Editor de texto para crear contenido"
          role="textbox"
          aria-multiline="true"
        />

        <button
          onClick={handleCreateComment}
          disabled={loadingCreate}
          className={`  ml-auto  rounded-lg bg-sky-400 text-white font-semibold tracking-wide transition-all 
            ${
              contenidoText.trim().length === 0
                ? 'h-0 p-0 overflow-hidden pointer-events-none'
                : 'h-auto p-2 border'
            }
            hover:bg-opacity-60
            ${loadingCreate && 'cursor-wait opacity-60'}
            `}
        >
          {loadingCreate ? 'Publicando' : 'Publicar'}
        </button>
      </div>
      {/* Mostrar algunos comentarios  */}
      <div className="flex w-full flex-col p-1 gap-2 ">
        {comentarios.length > 0 &&
          comentarios.map((comentario) => {
            return (
              <TarjetaComentario
                handleDelete={handleDelete}
                comentario={comentario}
              />
            );
          })}
        {hayMasComentarios && (
          <button onClick={handlePaginacion}>Mostrar más </button>
        )}
      </div>
    </section>
  );
}

export { SeccionComentariosPublicacion };
