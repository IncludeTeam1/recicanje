import { NOMBRE_APP } from '@/config';
import { createTimeAgo } from '@/helpers/timeAgo';
import { AvatarUser } from '../AvatarUser';

function AsideChat({ conversacion, handleChat }) {
  const usuarioinSesion = JSON.parse(
    localStorage.getItem(`${NOMBRE_APP}-userData`)
  );

  return (
    <div
      key={conversacion.uidCombinado}
      onClick={() => {
        handleChat(conversacion);
      }}
      className="border-b border-t
      w-[100%]
      p-3 hover:bg-gray-100 transition-all cursor-pointer"
    >
      <div className="flex  gap-2  w-full  ">
        <AvatarUser className="w-12 h-12" user={conversacion.usuario} />
        <div className="flex text-xs flex-col w-full gap-1 ">
          <div className=" flex justify-between max-w-[100%]">
            <span className="font-semibold whitespace-normal">
              {' '}
              {conversacion.usuario?.displayName}
            </span>
            <span className=" truncate">
              {createTimeAgo(conversacion.ultimoMensaje.fecha)}
            </span>
          </div>

          <p
            className=" text-sm text-ellipsis overflow-hidden whitespace-normal 
              w-[80%] truncate
            "
          >
            {Object.keys(conversacion.ultimoMensaje).length <= 0 // Si hay mensajes
              ? 'Envia un mensaje💌'
              : conversacion.uidEmite === usuarioinSesion.uid // Si el último mensaje es propio
              ? 'Tú: '
              : `${conversacion.usuario?.displayName.split(' ')[0]}: `}
            {conversacion.ultimoMensaje?.text?.length > 30
              ? `${conversacion.ultimoMensaje?.text.slice(0, 30)}...`
              : conversacion.ultimoMensaje?.text}{' '}
            {/* Texto del mensaje */}
          </p>
        </div>
      </div>
    </div>
  );
}

export { AsideChat };
