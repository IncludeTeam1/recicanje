import { useState } from 'react';
/* Componentes */
import { CloseIcon } from '../../../icons/CloseIcon';
import { AvatarUser } from '../AvatarUser';
import { PhotoIcon } from '../../../icons/PhotoIcon';
import { BotonAccion } from '../BotonAccion';

/* Funciones */
import { fileReader } from '../../../helpers/fileReader';
import { updateMultimedia } from '../../../helpers/updateMultimedia';
import { toast } from 'sonner';
// import { BASE_URL_API } from '../../../config';

function FormularioPublicacion({ user = {}, open, setOpen, refresh }) {
  /* Contenido de la publicación */
  const [contenidoText, setContenidoText] = useState('');
  /* File */
  const [file, setFile] = useState(null);
  /* url temporal */
  const [urlTemp, setUrlTemp] = useState('');

  /* carga de la solicitud */
  const [loadingPublish, setLoadingPublish] = useState(false);

  async function handleChangeFile(e) {
    const urlTemp = await fileReader(e.target.files[0]);

    setUrlTemp(urlTemp);
    setFile(e.target.files[0]);
  }

  async function handleSubmit(e) {
    try {
      /* Verifica si no hay archivos y no hay texto */
      if (!file && !contenidoText.trim()) {
        return toast('No hay nada para publicar.');
      }
      setLoadingPublish(true);
      /* Información requerida para la publicación */

      let data = {
        autor: user._id,
      };
      /* Archivo multimeda */
      if (file) {
        const { nombreFile, urlMultimedia } = await updateMultimedia({
          user,
          file,
        });

        data.contenido = {
          multimedia: [
            {
              url: urlMultimedia,
              nombreFile,
            },
          ],
        };
      }

      if (contenidoText.trim()) {
        data.contenido = {
          ...data.contenido,
          texto: contenidoText,
        };
      }
      /* Enviar al backend la data */

      const res = await fetch(`/api/publicaciones/crearPublicacion`, {
        method: 'POST',
        body: JSON.stringify({ data }),
      });

      if (res.status === 200) {
        refresh();
        toast.success('Publicación subida con exito');
      }
    } catch (error) {
      console.log(error);
      toast.error('Ha ocurrido un error');
    }
    setFile(null);
    setOpen(false);
    setLoadingPublish(false);
    setContenidoText('');
  }

  const manejarInput = (e) => {
    setContenidoText(e.target.innerHTML);
  };

  return (
    /* Modal */
    <div className="absolute  top-0 left-0 bottom-0 right-0 bg-gray-600 bg-opacity-75 w-full z-50  ">
      <main
        className="w-full sm:w-11/12 max-w-[800px] mx-auto sm:mt-20 bg-white
      sm:rounded-md shadow-xl p-5 flex flex-col gap-3 sticky top-0   sm:top-5
      "
      >
        {/*  */}
        <header className="flex justify-between items-center ">
          <div className="flex gap-3 items-center">
            <AvatarUser className="w-16 h-16" user={user} />
            <p className="text-xl ">{user.displayName}</p>
          </div>

          <BotonAccion
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon className="w-8 h-8" />
          </BotonAccion>
        </header>

        {/* Sección para crear la publicación */}
        <section
          className="flex flex-col justify-between  min-h-[300px] 
        max-h-[500px]
        "
        >
          {/* Input */}
          <p
            onInput={manejarInput}
            // onKeyDown={manejarKeyPress}
            className={`cursor-text outline-none  border-none ${
              contenidoText === ''
                ? "before:[content:'¿Sobre_que_quieres_hablar?']"
                : ''
            } before:absolute before:text-xl before:text-gray-500 p-2 border border-black max-h-[500px] overflow-y-auto whitespace-pre-wrap
            `}
            data-gramm="false"
            contentEditable
            data-placeholder="¿Sobre qué quieres hablar?"
            aria-placeholder="¿Sobre qué quieres hablar?"
            aria-label="Editor de texto para crear contenido"
            role="textbox"
            aria-multiline="true"
          ></p>

          {/*Vista previa de archivos multimedia*/}
          {urlTemp !== '' && (
            <div className="">
              <figure className="w-full flex justify-center items-center min-h-[300px] max-h-[400px]  overflow-hidden">
                <img
                  className=" h-full w-full max-w-[500px] object-cover border "
                  src={urlTemp}
                  alt={`Imagen de vista previa de la publicación del usuario ${user.displayName}`}
                />
              </figure>
            </div>
          )}

          {/* Subir imagen */}
          <BotonAccion title="Subir imagen multimedia" className="self-start">
            <label htmlFor="multimedia">
              <PhotoIcon className="stroke-black cursor-pointer" />
              <input
                onChange={handleChangeFile}
                id="multimedia"
                type="file"
                name="multimedia"
                className="hidden"
              />
            </label>
          </BotonAccion>
        </section>

        <hr />
        <BotonAccion
          onClick={(e) => {
            handleSubmit(e);
          }}
          className={`${
            contenidoText === '' && file == null
              ? 'cursor-not-allowed text-gray-400 pointer-events-none'
              : 'text-xl tracking-wider font-semibold'
          }
            ${loadingPublish ? ' cursor-wait ' : ''}
          
          `}
        >
          {loadingPublish ? 'Publicando...' : 'Publicar'}
        </BotonAccion>
      </main>
    </div>
  );
}

export { FormularioPublicacion };
