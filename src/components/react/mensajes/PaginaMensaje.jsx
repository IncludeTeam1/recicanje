import { useEffect, useState } from 'react';
import { SinMensajes } from './SinMensajes';
import { db } from '../../../firebase/client';
import { doc, onSnapshot, getDoc } from 'firebase/firestore';
import { NOMBRE_APP } from '../../../config';
import { AvatarUser } from '../AvatarUser';
import { createTimeAgo } from '../../../helpers/timeAgo';
import { Chat } from './Chat';
import { getUsuarioDocument } from '../../../helpers/getUsuarioDocumento';

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
        const data = snapshot.data();

        if (data) {
          const conversaciones = Object.values(data);
          console.log({ conversaciones });
          const usuariosEnConversaciones = conversaciones.map(
            async (conversacion) => {
              const usuarioDoc = await getUsuarioDocument(
                conversacion.uidOtroUsuario
              );
              return {
                ...conversacion,
                usuario: usuarioDoc.data(),
              };
            }
          );

          // Actualizar el estado con la información de los usuarios en conversaciones
          Promise.all(usuariosEnConversaciones)
            .then((usuarios) => {
              setLoading(false);
              setConversaciones(usuarios);
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
      console.log(window.innerWidth);
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

        <section className="min-h-[500px] h-[100%] bg-white">
          {loading ? (
            <div className="text-center text-xl ">
              <p>Cargando...</p>
            </div>
          ) : conversaciones.length === 0 ? (
            <SinMensajes />
          ) : (
            conversaciones.map((conversacion) => {
              return (
                <div
                  key={conversacion.uidCombinado}
                  onClick={() => {
                    handleChat(conversacion);
                  }}
                  className="border-b border-t p-3 hover:bg-gray-100 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3 relative">
                    <AvatarUser
                      className="w-12 h-12"
                      user={conversacion.usuario}
                    />
                    <div className="flex flex-col gap-1">
                      <p>{conversacion.usuario?.displayName}</p>
                      <p className="truncate text-sm whitespace-normal">
                        {conversacion.uidEmite === usuarioinSesion.uid ? (
                          'Tú: '
                        ) : (
                          <>
                            {conversacion.usuario?.displayName.split(' ')[0]}:{' '}
                          </>
                        )}

                        {conversacion.ultimoMensaje.text?.slice(0, 30) || (
                          <span className="text-xs">envia un mensaje</span>
                        )}
                      </p>
                    </div>
                    <span className="text-xs absolute bottom-0 right-0">
                      {createTimeAgo(conversacion.ultimoMensaje.fecha)}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </section>
      </aside>

      {/* Chat */}
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
          setChatSeleccionado={setChatSeleccionado}
          chat={chatSeleccionado}
        />
      </div>
    </div>
  );
}

export { PaginaMensaje };
