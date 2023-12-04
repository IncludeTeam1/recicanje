import { useEffect, useRef } from 'react';
import { NOMBRE_APP } from '../../../config';
import { createTimeAgo } from '../../../helpers/timeAgo';
import { AvatarUser } from '../AvatarUser';

function MensajeChat({ msg }) {
  const usuarioinSesion = JSON.parse(
    localStorage.getItem(`${NOMBRE_APP}-userData`)
  );

  const mensajeRef = useRef();

  useEffect(() => {
    mensajeRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div
      ref={mensajeRef}
      className={`flex border p-1 justify-between gap-2 ${
        msg.autor.uid === usuarioinSesion.uid
          ? 'flex-row-reverse'
          : 'bg-emerald-100'
      } `}
      key={msg.fecha}
    >
      <div
        className={`flex gap-1 ${
          msg.autor.uid === usuarioinSesion.uid ? 'flex-row-reverse' : ''
        }`}
      >
        <AvatarUser user={msg.autor} />
        <p className="whitespace-break-spaces text-sm">{msg.contenido.texto}</p>
      </div>

      <span className="text-xs whitespace-nowrap ">
        {new Date(msg?.fecha).toLocaleTimeString('es-Es', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })}
      </span>
    </div>
  );
}

export { MensajeChat };
