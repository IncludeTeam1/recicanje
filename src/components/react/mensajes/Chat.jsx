import { useEffect, useState, useRef } from 'react';
import { db } from '../../../firebase/client';
import { NOMBRE_APP } from '../../../config';
import {
  doc,
  onSnapshot,
  getDoc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { getUsuarioDocument } from '../../../helpers/getUsuarioDocumento';
import { AvatarUser } from '../AvatarUser';
import { createTimeAgo } from '../../../helpers/timeAgo';
import { BotonAccion } from '../BotonAccion';
import { FlechaIcon } from '../../../icons/FlechaIcon';

function Chat({ chat = null, setChatSeleccionado }) {
  const usuarioInSesion = JSON.parse(
    localStorage.getItem(`${NOMBRE_APP}-userData`)
  );

  const [mensajes, setMensajes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [contenidoText, setContenidoText] = useState('');
  const [loadingEnvio, setLoadingEnvio] = useState(false)

  const [usuarioDestino, setUsuarioDestino] = useState(null);

  const inputRef = useRef();
  function manejarInput(e) {
    setContenidoText(e.target.value);
  }

  async function handleSubmit() {
    if (!contenidoText.trim()) return alert('Ingresa un mensaje valido...');
    const mensaje = {
      text: contenidoText,
      fecha: Date.now(),
    };

    try {
      /* Actualizar la colección conversaciones y añadir los mensajes */
      await updateDoc(doc(db, 'conversaciones', chat.uidCombinado), {
        messages: arrayUnion({
          contenido: {
            texto: contenidoText,
          },
          fecha: Date.now(),
          autor: usuarioInSesion.uid,
        }),
      });

      /* Acutalizar en usuario destino */
      await updateDoc(
        doc(db, 'usuarioConversaciones', usuarioDestino.uid),
        {
          [chat.uidCombinado]: {
            uidCombinado: chat.uidCombinado,
            uidOtroUsuario: usuarioInSesion.uid,
            uidEmite: usuarioInSesion.uid,
            ultimoMensaje: mensaje,
          },
        },
        { merge: true }
      );

      // Actualizar el usuario en sesion
      await updateDoc(
        doc(db, 'usuarioConversaciones', usuarioInSesion.uid),
        {
          [chat.uidCombinado]: {
            uidCombinado: chat.uidCombinado,
            uidOtroUsuario: usuarioDestino.uid,
            uidEmite: usuarioInSesion.uid,
            ultimoMensaje: mensaje,
          },
        },
        { merge: true }
      );
      setContenidoText('');
      inputRef.current.target.value = '';
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setUsuarioDestino(chat?.usuario);

    async function getMensajes() {
      setLoading(true);
      const unSub = onSnapshot(
        doc(db, 'conversaciones', chat.uidCombinado),
        (snapshot) => {
          const data = snapshot.data();
          if (data) {
            console.log(data);
            const mensajes = data.messages.map(async (msg) => {
              const participante = await getUsuarioDocument(msg.autor); // hago al usuario de la colección usuarios con el uid
              return {
                ...msg,
                autor: participante.data(),
              };
            });
            Promise.all(mensajes).then((msgs) => {
              setLoading(false);
              setMensajes(msgs);
            });
          }
        },
        (error) => {
          console.log(error);
        }
      );
      return () => {
        setMensajes([]);
        unSub();
      };
    }

    chat !== null && getMensajes(); // si el chat esxiste traigo los mensajes
  }, [chat]);

  return (
    <main
      className={`bg-white  md:flex gap-2  md:min-h-full md:shadow-md rounded-md flex-col p-2
      flex-grow `}
    >
      {chat === null ? (
        <div className="text-center text-xl m-auto">
          <p className="bg-gradient-to-t from-emerald-600 text-transparent bg-clip-text font-semibold">
            {chat === null ? 'Inicia una conversación' : 'Selecciona un chat'}
          </p>
          👈🏽
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <div className="border-b p-2 flex justify-between items-center">
            <a
              className="hover:underline hover:text-sky-600"
              href={`/perfil/${chat?.usuario?.uid}`}
            >
              {chat?.usuario?.displayName}
            </a>
            <BotonAccion
              onClick={() => {
                setChatSeleccionado(null);
              }}
            >
              <FlechaIcon className="rotate-90" />
            </BotonAccion>
          </div>
          <div className="h-full flex flex-col gap-3">
            {loading ? (
              <div className="text-center text-xl">
                <p className="bg-gradient-to-t from-emerald-600 text-transparent bg-clip-text font-semibold animate-pulse">
                  Trayendo mensajes
                </p>
              </div>
            ) : mensajes.length > 0 ? (
              <div className="flex flex-col gap-1 overflow-y-auto max-h-[600px]">
                {mensajes.map((msg) => {
                  if (msg) {
                    return (
                      <div
                        className={`flex border p-1 justify-between gap-2 ${
                          msg.autor.uid === usuarioInSesion.uid
                            ? 'flex-row-reverse'
                            : 'bg-emerald-100'
                        } `}
                        key={msg.fecha}
                      >
                        <div
                          className={`flex gap-1 ${
                            msg.autor.uid === usuarioInSesion.uid
                              ? 'flex-row-reverse'
                              : ''
                          }`}
                        >
                          <AvatarUser user={msg.autor} />
                          <p className="whitespace-break-spaces text-sm">
                            {msg.contenido.texto}
                          </p>
                        </div>

                        <span className="text-[10px] whitespace-nowrap ">
                          {createTimeAgo(msg?.fecha)
                            ?.split(' ')
                            ?.slice(1)
                            ?.join(' ')}
                        </span>
                      </div>
                    );
                  }
                })}
              </div>
            ) : (
              <p>No hay mensajes</p>
            )}

            {/*    {mensajes.length > 0 ? (
              <div className="flex flex-col gap-1 overflow-y-auto max-h-[600px]">
                {mensajes.map((msg) => {
                  if (msg) {
                    return (
                      <div
                        className={`flex border p-1 justify-between gap-2 ${
                          msg.autor.uid === usuarioInSesion.uid
                            ? 'flex-row-reverse'
                            : 'bg-emerald-100'
                        } `}
                        key={msg.fecha}
                      >
                        <div
                          className={`flex gap-1 ${
                            msg.autor.uid === usuarioInSesion.uid
                              ? 'flex-row-reverse'
                              : ''
                          }`}
                        >
                          <AvatarUser user={msg.autor} />
                          <p className="whitespace-break-spaces text-sm">
                            {msg.contenido.texto}
                          </p>
                        </div>

                        <span className="text-[10px] whitespace-nowrap ">
                          {createTimeAgo(msg?.fecha)
                            ?.split(' ')
                            ?.slice(1)
                            ?.join(' ')}
                        </span>
                      </div>
                    );
                  }
                })}
              </div>
            ) : (
              <p>No hay mensajes</p>
            )} */}
          </div>

          <div className="mt-3 flex flex-col md:flex-row  gap-2">
            <textarea
              ref={inputRef}
              value={contenidoText}
              type="text"
              placeholder="Envia un mensaje"
              className="block min-h-28  max-h-36 outline-none border resize-none
             py-4 px-2  w-full
            "
              onChange={manejarInput}
            />
            <button
              onClick={handleSubmit}
              className="border p-1 bg-teal-700 w-10/12 md:w-auto mx-auto md:mx-0 rounded-lg  text-white"
            >
              {' '}
              Enviar{' '}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export { Chat };

/* messages:[
  {
    autor:uid, -> hacer la relación con los usuarios
    contenido:{
      texto:string,
      multimedia: string -> url
    },
    fecha: Date.now(),
    visto:bool,
  }
] */
