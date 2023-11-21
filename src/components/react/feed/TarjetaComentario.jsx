import { useEffect, useRef, useState } from 'react';
import { NOMBRE_APP } from '../../../config';
import { createTimeAgo } from '../../../helpers/timeAgo';
import { AvatarUser } from '../../react/AvatarUser';
import { BotonAccion } from '../BotonAccion';
import { ReciclarIcon } from '../../../icons/ReciclarIcon';
import { SeccionComentariosRespuesta } from './seccionComentariosRespuesta';

function TarjetaComentario({
  comentario,
  handleDelete,
  comentarioRespuesta = false,
  handleDeleteRespuesta = null,
}) {
  const userInSesion = JSON.parse(
    localStorage.getItem(`${NOMBRE_APP}-userData`)
  );

  const [currentComentario, setCurrentComentario] = useState(comentario);
  const [yaDiMeGusta, setYaDiMeGusta] = useState(null);

  const [refresCount, setRefresCount] = useState(0);

  const [usuarioAResponder, setUsuarioAResponder] = useState(null);

  // const [contenidoHtml, setContenidoHtml] = useState('');
  useEffect(() => {
    console.log('Render de nuevo');
    /* console.log(currentComentario); */
  }, [refresCount]);

  /* Actualiza al comentario */
  useEffect(() => {
    setCurrentComentario(comentario);
    /*  setContenidoHtml(() => {
      if (comentarioRespuesta.esRespuesta) {
        return `<div><a href="/perfil/${comentarioRespuesta?.usuarioRespuesta?.uid}" className="text-[10px]" >${comentarioRespuesta?.usuarioRespuesta?.displayName}</a> ${comentario.contenido?.texto}</div>`;
      } else {
        return `${comentario.contenido?.texto}</div>`;
      }
    }); */
  }, [comentario]);

  useEffect(() => {
    if (typeof currentComentario === 'object') {
      const yaDiMg = currentComentario.meGustas.some((mg) => {
        return mg.autor.toString() === userInSesion?._id?.toString();
      });
      setYaDiMeGusta(yaDiMg);
    }
  }, [currentComentario]);

  async function handleMeGusta(comentario_id, user_id) {
    const data = {
      comentario_id,
      user_id,
      accion: 'me_gusta',
    };

    try {
      const res = await fetch(`/api/comentarios/actualizarComentario`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });

      const dataRes = await res.json();
      if (res.status === 200) {
        console.log({ dataRes });
        setCurrentComentario(dataRes.comentario);
      }
    } catch (error) {
      console.log(error);
      alert('Ha ocurrido un error');
    }
  }

  /* Respuesta de comentario */
  const [contenidoText, setContenidoText] = useState('');
  const [openReply, setOpenReply] = useState(false);
  const inputRef = useRef(null);

  function handleOpenReply({ comentarioAResponder }) {
    setUsuarioAResponder(comentarioAResponder.autor);

    setOpenReply(!openReply);
  }

  /* Limpiar el contenido del input */

  const manejarInput = (e) => {
    setContenidoText(e.target.innerHTML);
  };

  /* Crear comentario resputesta, solo se debe añadir al comentario principal no ir anidando comentarios */
  async function createReply() {
    if (contenidoText.trim().length === 0) {
      return alert('No se puede enviar un comentario vacio');
    }
    try {
      // setLoadingCreate(true);
      const data = {
        user_id: userInSesion._id,
        contenido: {
          texto: contenidoText,
        },
        usuarioRespuesta: usuarioAResponder._id,
        /* Le debo mandar el comentario del padre no del hijo */
        // comentario_id: comentario._id,
        comentario_id: comentarioRespuesta.esRespuesta
          ? comentarioRespuesta.comentario_id
          : comentario._id,

        accion: 'respuesta',
      };

      const res = await fetch(`/api/comentarios/actualizarComentario`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      if (res.status === 200) {
        console.log(resData);
        setContenidoText('');
        setOpenReply(false);
        inputRef.current.textContent = '';
        /* Si es una respuesta hay que hacer que se recargue el comentario más no añadirlo */
        if (!comentarioRespuesta.esRespuesta || !comentarioRespuesta) {
          console.log(comentarioRespuesta);
          setCurrentComentario(resData.comentario); // actualiza el comentario
        } else {
          // console.log(resData.comentario);
          comentarioRespuesta.setComentariosRespuesta();
        }
      }
    } catch (error) {
      console.log(error);
      alert('Ha ocurrido un error');
    } finally {
      // setLoadingCreate(false);
    }
  }

  /*   useEffect(() => {
    if (inputRef.current) {
      console.log(inputRef);
      const contenido = `<a className="
      cursor-pointer
      text-sky-600 hover:underline" >${usuarioAResponder.displayName}</a>`;
      inputRef.current.innerHTML = contenido;
      setContenidoText(contenido);
    }
  }, [usuarioAResponder]); */

  return (
    <>
      <div className=" w-full flex flex-col">
        <div className="flex items-start gap-4 px-3  pr-5 ">
          <a href={`/perfil/${currentComentario?.autor?.uid}`}>
            <AvatarUser
              className="w-10 h-10 flex-shrink-0"
              user={currentComentario.autor}
            />
          </a>
          <div className="flex flex-col gap-1 relative  w-full">
            <div
              className="p-3  bg-gray-100 w-full rounded-md
            rounded-r-2xl
            "
            >
              <div className="flex justify-between items-center">
                <h2 className="text-gray-500 font-semibold ">
                  <a
                    className="hover:underline"
                    href={`/perfil/${currentComentario?.autor?.uid}`}
                  >
                    {currentComentario?.autor?.displayName}
                  </a>
                </h2>
                <div className="flex items-center">
                  <date className="text-xs truncate ">
                    {currentComentario.fechaComentario &&
                      createTimeAgo(currentComentario?.fechaComentario)}
                  </date>
                </div>
              </div>
              {comentarioRespuesta?.esRespuesta ? (
                currentComentario.contenido?.texto && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `<div><a href="/perfil/${comentarioRespuesta?.usuarioRespuesta?.uid}"
                      style="font-size:14px; color:#09f" >${comentarioRespuesta?.usuarioRespuesta?.displayName}</a>    ${currentComentario.contenido?.texto}</div>`,
                    }}
                  ></p>
                )
              ) : (
                <p
                  dangerouslySetInnerHTML={{
                    __html: currentComentario.contenido?.texto,
                  }}
                ></p>
              )}
            </div>
            {/* Acciones */}
            <div className="flex gap-1 justify-between items-center">
              <div className="flex gap-1 items-center">
                <BotonAccion
                  onClick={() => {
                    handleMeGusta(currentComentario._id, userInSesion._id);
                  }}
                  className={`text-xs  py-[0.2px] ${
                    yaDiMeGusta
                      ? 'bg-gray-200 rounded-3xl text-emerald-600'
                      : 'text-gray-500 rounded-none'
                  }`}
                >
                  Me gusta
                </BotonAccion>
                {currentComentario.cantidadMeGustas > 0 && (
                  <span className="flex items-center text-[12px] gap-1">
                    {currentComentario.cantidadMeGustas}{' '}
                    <ReciclarIcon className="w-4 stroke-teal-700" />{' '}
                  </span>
                )}
                {currentComentario?.autor?.uid !== userInSesion.uid && (
                  <>
                    <span>|</span>
                    <BotonAccion
                      onClick={() => {
                        handleOpenReply({
                          comentarioAResponder: currentComentario,
                        });
                      }}
                      className=" text-xs text-gray-500 rounded-none py-[0.2px]"
                    >
                      Responder
                    </BotonAccion>
                  </>
                )}
              </div>
              {userInSesion.uid === currentComentario?.autor?.uid && (
                <BotonAccion
                  onClick={() => {
                    if (handleDeleteRespuesta) {
                      handleDeleteRespuesta({
                        comentario_id: currentComentario._id,
                      });
                    } else {
                      handleDelete({ comentario_id: currentComentario._id });
                    }
                  }}
                  className="text-xs text-rose-500 p-1 hover:bg-rose-400 hover:text-white "
                >
                  Eliminar
                </BotonAccion>
              )}
            </div>
            {/* Respuesta del comentario */}
            {openReply && (
              <div className="p-2 flex flex-col gap-3  ">
                {/* Usuario al que se le va a responder */}
                <div>
                  {/*   {usuarioAResponder && (
                    <span className=" text-sky-700 text-xs hover:underline absolute">
                      {usuarioAResponder.displayName}
                    </span>
                  )} */}
                  <p
                    ref={inputRef}
                    onInput={manejarInput}
                    className={`cursor-text outline-none text-[14px]   ${
                      contenidoText === ''
                        ? `before:[content:'${
                            usuarioAResponder
                              ? `Responder_a_${
                                  usuarioAResponder?.displayName.split(' ')[0]
                                }`
                              : 'Agregar_una_respuesta'
                          }']`
                        : ''
                    } before:absolute  before:text-[14px] before:text-gray-500 p-1 border  max-h-[200px] overflow-y-auto whitespace-pre-wrap rounded-3xl px-2
                              `}
                    data-gramm="false"
                    contentEditable
                    aria-label="Editor de texto para crear contenido"
                    role="textbox"
                    aria-multiline="true"
                  />
                </div>
                <button
                  onClick={createReply}
                  // disabled={loadingCreate}
                  className={`  ml-auto  rounded-lg bg-sky-400 text-white font-semibold tracking-wide transition-all
                ${
                  contenidoText.trim().length === 0
                    ? 'h-0 p-0 overflow-hidden pointer-events-none'
                    : 'h-auto p-1 border'
                }
                hover:bg-opacity-60 px-2 text-[14px]
                `}
                >
                  {/* ${loadingCreate && 'cursor-wait opacity-60'} */}
                  {/* {loadingCreate ? 'Publicando' : 'Publicar'} */}
                  Responder
                </button>
              </div>
            )}
          </div>
        </div>
        {currentComentario?.comentariosRespuesta?.length > 0 && (
          <SeccionComentariosRespuesta comentarioPadre={currentComentario} />
        )}
      </div>
    </>
  );
}

export { TarjetaComentario };
