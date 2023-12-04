import sin_mensajes from '../../../assets/images/sin_mensajes.svg';
import { BASE_URL_API } from '../../../config';

function SinMensajes({ title = 'Aún no tienes mensajes' }) {
  return (
    <div className="flex justify-center items-center flex-col gap-3 p-2">
      <div className="flex justify-center items-center flex-col gap-1">
        <img
          src={sin_mensajes.src}
          alt={`Imagen que ilustra que el usuario no tiene mensajes`}
        />
        <p className="text-xl">{title}</p>
      </div>
      <p className="text-center">
        Busca contactos con los que puedas intercambiar ideas y poder conseguir
        lo que quieres.{' '}
        <a className="text-sky-600" href={`${BASE_URL_API}/mi-red`}>
          Busca contactos
        </a>
      </p>
    </div>
  );
}

export { SinMensajes };
