import { useEffect, useState } from 'react';
import { CloseIcon } from '../../../icons/CloseIcon';
import { BotonAccion } from '../BotonAccion';
import { InputText } from '../InputText';
import { VistaPreviaUsuario } from './VistaPreviaUsuario';

import { updateMultimedia } from '../../../helpers/updateMultimedia.js';
import { fileReader } from '../../../helpers/fileReader';
import { NOMBRE_APP } from '../../../config.js';
import { toast } from 'sonner';

function FormularioActualizar({ user, setAbrirModal }) {
  function handleModal(e) {
    setAbrirModal(false);
    document.body.classList.remove('overflow-hidden');
    document.body.classList.remove('sm:overflow-auto');
  }

  const [userTemp, setUserTemp] = useState(user);

  /* Para manejar cuando eliminar las url temporales  */
  const [urlPhotoTemp, setUrlPhotoTemp] = useState('');
  const [urlPortadaTemp, setUrlPortadaTemp] = useState('');

  const [fileProfile, setFileProfile] = useState(null);
  const [filePortada, setFilePortada] = useState(null);

  /* Estado para ver si algo ha cambiado */
  const [isThereChange, setIsThereChange] = useState(false);

  /* Carga al enviar */
  const [uploadingFile, setUploadingFile] = useState(false);

  useEffect(() => {
    if (JSON.stringify(userTemp) === JSON.stringify(user)) {
      setIsThereChange(false);
    } else {
      setIsThereChange(true);
    }
  }, [userTemp]);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    document.body.classList.add('sm:overflow-auto');
  }, []);

  function handleInput(e) {
    const campo = e.target.name;

    if (campo === 'nombre') {
      setUserTemp((old) => {
        return {
          ...old,
          nombre: e.target.value.trim() || user.nombre,
        };
      });
    } else if (campo === 'apellido') {
      setUserTemp((old) => {
        return {
          ...old,
          apellido: e.target.value.trim() || user.apellido,
        };
      });
    } else if (campo === 'displayName') {
      setUserTemp((old) => {
        return {
          ...old,
          displayName: e.target.value.trim() || user.displayName,
        };
      });
    }
  }

  /* Archivos */
  async function handleFile(e) {
    const campo = e.target.name;
    const urlTemp = await fileReader(e.target.files[0]);

    if (campo === 'perfil') {
      setUrlPhotoTemp(urlTemp);
      setFileProfile(e.target.files[0]);

      setUserTemp((old) => {
        return {
          ...old,
          photoURL: urlTemp,
        };
      });
    } else if (campo === 'portada') {
      setFilePortada(e.target.files[0]);
      setUrlPortadaTemp(urlTemp);

      setUserTemp((old) => {
        return {
          ...old,
          portadaURL: urlTemp,
        };
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let newUser = {
      ...userTemp,
    };

    try {
      setUploadingFile(true);
      if (fileProfile) {
        const { urlMultimedia } = await updateMultimedia({
          user,
          file: fileProfile,
        });

        newUser['photoURL'] = urlMultimedia;
      }

      if (filePortada) {
        const { urlMultimedia } = await updateMultimedia({
          user,
          file: filePortada,
        });
        newUser['portadaURL'] = urlMultimedia;
      }

      const res = await fetch('/api/auth/actualizarUsuario', {
        method: 'POST',
        body: JSON.stringify({
          data: newUser,
        }),
      });
      if (res.status === 200) {
        toast.success('Información actualizada');
        localStorage.setItem(`${NOMBRE_APP}.userData`, JSON.stringify(newUser));
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      toast.error('Ha ocurrido un error al actualizar la información');
    } finally {
      setUploadingFile(false);
      setAbrirModal(false);
    }
  }

  return (
    <div className="absolute top-0 left-0 bottom-0 bg-gray-600 bg-opacity-75 w-full z-50  ">
      <main
        className="w-full sm:w-11/12 max-w-[800px] h-[100vh] md:h-auto mx-auto sm:mt-20 bg-white sm:rounded-md shadow-xl p-5 flex flex-col gap-3 sticky top-0 overflow-y-scroll z-50 sm:top-5
      pb-[110px] md:pb-5
      "
      >
        <header className="flex items-center">
          <h2 className="text-3xl font-semibold">Editar información</h2>

          <BotonAccion className="block ml-auto" onClick={handleModal}>
            <CloseIcon />
          </BotonAccion>
        </header>
        <section className=" ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <InputText
              onInput={handleInput}
              name="nombre"
              label="Nombre/s"
              placeholder={user.nombre || ''}
              id="nombre"
            />
            <InputText
              onInput={handleInput}
              name="apellido"
              label="Apellido/s"
              placeholder={user.apellido || ''}
              id="apellido"
            />
            <InputText
              maxLength={50}
              onInput={handleInput}
              name="displayName"
              label="Nombre a mostrar"
              placeholder={user.displayName || ''}
              id="displayName"
            />
            {/* Imagenes */}
            <section className="flex flex-col gap-1 md:gap-5 md:flex-row justify-around">
              <div className="flex flex-col w-full max-w-[300px] items-start gap-5">
                {/* Foto de perfil */}
                <div className="flex flex-col w-full gap-1 ">
                  <h2 className=" tracking-wide">Foto de perfil</h2>
                  <div className="flex justify-between  w-full">
                    <label
                      className=" text-sm 
                                   py-2 px-4
                                  rounded-full border-0
                                   font-semibold
                                  bg-sky-50 text-sky-700
                                  hover:bg-sky-100 cursor-pointer"
                    >
                      <p>Seleccionar archivo</p>
                      <input
                        name="perfil"
                        onChange={handleFile}
                        type="file"
                        className="hidden"
                      />
                    </label>
                    {urlPhotoTemp && (
                      <BotonAccion
                        onClick={() => {
                          setUrlPhotoTemp('');
                          setUserTemp((old) => {
                            return {
                              ...old,
                              photoURL: user.photoURL,
                            };
                          });
                        }}
                      >
                        🗑
                      </BotonAccion>
                    )}
                  </div>
                </div>

                {/* Foto de portada */}
                <div className="flex flex-col w-full gap-1 ">
                  <h2 className=" tracking-wide">Foto de portada</h2>
                  <div className="flex justify-between  w-full">
                    <label
                      className=" text-sm 
                                   py-2 px-4
                                  rounded-full border-0
                                   font-semibold
                                  bg-sky-50 text-sky-700
                                  hover:bg-sky-100 cursor-pointer"
                    >
                      <p>Seleccionar archivo</p>
                      <input
                        name="portada"
                        onChange={handleFile}
                        type="file"
                        className="hidden"
                      />
                    </label>
                    {urlPortadaTemp && (
                      <BotonAccion
                        onClick={() => {
                          setUrlPortadaTemp('');
                          setUserTemp((old) => {
                            return {
                              ...old,
                              portadaURL: user.portadaURL,
                            };
                          });
                        }}
                      >
                        🗑
                      </BotonAccion>
                    )}
                  </div>
                </div>
              </div>
              {/* Vista previa */}
              <div className="w-full  flex flex-col gap-2">
                <h3 className="text-sm">Vista Previa</h3>
                <VistaPreviaUsuario user={userTemp} />
              </div>
            </section>
            {isThereChange && (
              <button
                disabled={uploadingFile}
                className=" p-3 bg-emerald-500 rounded-xl text-white w-full max-w-[300px] mx-auto disabled:brightness-90 disabled:cursor-wait disabled:pointer-events-none  
                hover:bg-transparent hover:text-emerald-500 hover:outline outline-emerald-500
                transition 
            "
              >
                {uploadingFile ? 'Guardando...⏫' : 'Guardar'}
              </button>
            )}
          </form>
        </section>
      </main>
    </div>
  );
}

export { FormularioActualizar };
