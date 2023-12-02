import { NOMBRE_APP } from '../../../config';
import { createTimeAgo } from '../../../helpers/timeAgo';
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
      className="border-b border-t p-3 hover:bg-gray-100 transition-all cursor-pointer"
    >
      <div className="flex  gap-3 relative">
        <AvatarUser className="w-12 h-12" user={conversacion.usuario} />
        <div className="flex text-xs flex-col gap-1">
          <div className="flex justify-between gap-5">
            <p className="font-semibold whitespace-nowrap">
              {' '}
              {conversacion.usuario?.displayName}
            </p>
            <span className="text-xs truncate">
              {createTimeAgo(conversacion.ultimoMensaje.fecha)}
            </span>
          </div>
          <p className="truncate text-sm  whitespace-normal">
            {conversacion.uidEmite === usuarioinSesion.uid ? (
              'Tú: '
            ) : (
              <span className="">
                {conversacion.usuario?.displayName.split(' ')[0]}:{' '}
              </span>
            )}

            {conversacion.ultimoMensaje.text?.slice(0, 30) || (
              <span className="text-xs ">envia un mensaje</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export { AsideChat };
