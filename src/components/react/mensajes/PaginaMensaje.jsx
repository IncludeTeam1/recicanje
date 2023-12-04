import { useEffect, useState } from 'react';
import { SinMensajes } from './SinMensajes';
import { db } from '../../../firebase/client';
import { doc, onSnapshot, getDoc } from 'firebase/firestore';
import { NOMBRE_APP } from '../../../config';

import { Chat } from './Chat';
import { getUsuarioDocument } from '../../../helpers/getUsuarioDocumento';
import { AsideChat } from './AsideChat';

import '../../../css/loaders.css';

function PaginaMensaje() {
  const [conversaciones, setConversaciones] = useState([]);
  const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);

  const [chatSeleccionado, setChatSeleccionado] = useState(null);
  const usuarioinSesion = JSON.parse(
    localStorage.getItem(`${NOMBRE_APP}-userData`)
  );

  useEffect(() => {
    setLoading(true);
    const unSub = onSnapshot(
      doc(db, 'usuarioConversaciones', usuarioinSesion.uid),
      (snapshot) => {
        const data = snapshot.data(); // las conversaciones del usuario

        if (data) {
          const conversaciones = Object.values(data);

          const usuariosEnConversaciones = conversaciones.map(
            async (conversacion) => {
              const usuarioDoc = await getUsuarioDocument(
                // traer los datos del usuario. (displayName, UID, photoURL)
                conversacion.uidOtroUsuario
              );
              return {
                ...conversacion,
                usuario: usuarioDoc.data(), // quieta el uidUsuario y le da los datos
              };
            }
          );

          // Actualizar el estado con la información de los usuarios en conversaciones
          Promise.all(usuariosEnConversaciones)
            .then((usuarios) => {
              const conversacionesOrdenadas = usuarios.sort(
                (a, b) => b.ultimoMensaje.fecha - a.ultimoMensaje.fecha
              );
              setLoading(false);
              setConversaciones(conversacionesOrdenadas);
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
        } else {
          setLoading(false);
        }
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unSub();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setAnchoVentana(window.innerWidth);
    };
    // Agregar un event listener para el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpieza del event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleChat(chat) {
    setChatSeleccionado(chat);
  }

  return (
    <div className=" w-full relative max-w-4xl mx-auto  flex gap-2">
      <aside
        className="w-full min-h-screen md:w-[320px] md:min-h-full flex-shrink-0
     bg-white shadow-md rounded-md flex flex-col gap-1 overflow-hidden"
      >
        <h2 className="text-xl text-gray-500 p-3 text-center">Mensajes</h2>

        <section
          className="min-h-[500px]
          w-full 
          h-[100%] bg-white"
        >
          {loading ? (
            <div className="relative mt-5">
              <div className="loader bouncy">
                <div className="cube">
                  <div className="cube__inner"></div>
                </div>
                <div className="cube">
                  <div className="cube__inner"></div>
                </div>
                <div className="cube">
                  <div className="cube__inner"></div>
                </div>
              </div>
            </div>
          ) : conversaciones.length === 0 ? (
            <SinMensajes />
          ) : (
            conversaciones.map((conversacion) => {
              /* Chat minitura la vista previa del chat */
              return (
                <AsideChat
                  key={conversacion?.usuario?.uid}
                  conversacion={conversacion}
                  handleChat={handleChat}
                />
              );
            })
          )}
        </section>
      </aside>

      {/* Chat, principal en donde se ven los mensajes */}
      <div
        className={`${
          anchoVentana < 768
            ? chatSeleccionado === null
              ? 'fixed translate-x-[100%]  opacity-0 h-[60%] pointer-events-none duration-75'
              : 'fixed translate-x-[0%]  h-[60%] opacity-100 pointer-events-auto'
            : 'transition-all'
        } w-full sm:w-[90%] md:w-full  transition-all flex flex-grow `}
      >
        <Chat
          isMovil={anchoVentana < 768}
          setChatSeleccionado={setChatSeleccionado}
          chat={chatSeleccionado}
        />
      </div>
    </div>
  );
}

export { PaginaMensaje };
