import { useEffect, useState, useRef } from 'react';
import { db } from '../../../firebase/client';
import { doc, onSnapshot } from 'firebase/firestore';
import { getUsuarioDocument } from '../../../helpers/getUsuarioDocumento';

import { BotonAccion } from '../BotonAccion';
import { FlechaIcon } from '../../../icons/FlechaIcon';
import { InputChat } from './InputChat';
import { MensajeChat } from './MensajeChat';

import '../../../css/loaders.css';

function Chat({ chat = null, setChatSeleccionado, isMovil }) {
  const [mensajes, setMensajes] = useState([]);
  const [loading, setLoading] = useState(false);

  const [usuarioDestino, setUsuarioDestino] = useState(null);

  useEffect(() => {
    setUsuarioDestino(chat?.usuario);

    async function getMensajes() {
      setLoading(true);
      const unSub = onSnapshot(
        doc(db, 'conversaciones', chat.uidCombinado),
        (snapshot) => {
          const data = snapshot.data();
          if (data) {
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
            {isMovil && (
              <BotonAccion
                onClick={() => {
                  setChatSeleccionado(null);
                }}
              >
                <FlechaIcon className="rotate-90" />
              </BotonAccion>
            )}
          </div>
          <div className="h-full flex flex-col gap-3">
            {loading ? (
              <div className="flex justify-center items-start mt-5">
                <div className="container dot_wave">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            ) : mensajes.length > 0 ? (
              <div className="flex flex-col gap-1 overflow-y-auto max-h-[600px]">
                {mensajes.map((msg) => {
                  if (msg) {
                    return <MensajeChat msg={msg} />;
                  }
                })}
              </div>
            ) : (
              <p>No hay mensajes</p>
            )}
          </div>

          {/* Input para escribir el mensaje */}
          <InputChat chat={chat} usuarioDestino={usuarioDestino} />
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
