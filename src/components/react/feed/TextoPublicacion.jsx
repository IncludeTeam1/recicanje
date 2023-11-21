import { useState } from 'react';

function TextoPublicacion({ publicacion }) {
  const [verMas, setVerMas] = useState(false);

  const { texto } = publicacion.contenido;

  let contenidoTexto = '';
  if (texto) {
    contenidoTexto = verMas
      ? texto
      : `${texto.slice(0, 300)}${texto.length > 300 ? '...' : ''}`;
  }

  function handleClick(e) {
    setVerMas(!verMas);
  }

  return (
    <div>
      <p
        dangerouslySetInnerHTML={{
          __html: contenidoTexto,
        }}
        className="text-sm lg:text-base p-3 pb-0 transition-all"
      ></p>
      {publicacion.contenido?.texto?.length > 300 && (
        <button
          className="text-sm  block mr-5 underline underline-offset-2 text-gray-500 
        hover:scale-105 hover:text-emerald-900 transition-all
        ml-auto"
          onClick={handleClick}
        >
          {verMas ? 'Ver menos' : '...Ver más'}
        </button>
      )}
    </div>
  );
}

export { TextoPublicacion };
