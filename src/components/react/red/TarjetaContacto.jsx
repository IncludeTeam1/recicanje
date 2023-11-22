import { AvatarUser } from '../AvatarUser';
const bg =
  'https://img.freepik.com/vector-premium/patron-fisuras-reciclaje-separacion-basura-co2-concepto-cambio-climatico-doodle-vectorial_414360-2797.jpg';
function TarjetaContacto({ handleClik, usuario, type = 'sugerencia' }) {
  const contenido = {
    sugerencia: '➕ Conectar',
    pendiente: '🕗 Pendiente',
    confirmar: '✅ Aceptar',
  };

  const clases = {
    sugerencia: `border border-emerald-600 text-emerald-700
    px-3 py-2 rounded-3xl  hover:text-white hover:border-white hover:bg-emerald-600 transition`,

    pendiente: `border border-gray-600 
    px-3 py-2 rounded-3xl  text-white hover:border-white hover:bg-gray-400 bg-gray-600 transition`,

    confirmar: `border border-emerald-600 text-emerald-700 bg-emerald-100 
    px-3 py-2 rounded-3xl  hover:text-white hover:border-white hover:bg-emerald-600 transition`,
  };

  return (
    <div className="relative bg-white shadow-md rounded-md p-5  flex flex-col items-center justify-between ">
      {/* Foto de portada */}
      <div
        className="h-[80px] bg-cover aspect-video bg-no-repeat w-full bg-center absolute "
        style={{ backgroundImage: `url(${usuario.portadaURL || bg})` }}
      ></div>

      {/* Datos */}
      <a
        href={`/perfil/${usuario.uid}`}
        className="flex flex-col items-center justify-center text-center"
      >
        <AvatarUser user={usuario} className="w-24 h-24 z-10 translate-y-2" />

        <p className="pt-3 hover:underline underline-offset-2 transition">
          {usuario.displayName}
        </p>
      </a>

      {/* Acción */}
      <button
        className={clases[type]}
        onClick={() => {
          handleClik(usuario);
        }}
      >
        {' '}
        {contenido[type]}
      </button>
    </div>
  );
}

export { TarjetaContacto };
