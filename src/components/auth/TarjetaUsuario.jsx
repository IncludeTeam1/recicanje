import { NOMBRE_APP } from '../../config';
import { AvatarUser } from '../react/AvatarUser';

const bg =
  'https://img.freepik.com/vector-premium/patron-fisuras-reciclaje-separacion-basura-co2-concepto-cambio-climatico-doodle-vectorial_414360-2797.jpg';

function TarjetaUsuario({ user, className = '', ...props }) {
  const userInSesion = JSON.parse(
    localStorage.getItem(`${NOMBRE_APP}-userData`)
  );

  async function handleSubmit(e) {
    console.log('cerrar');
    e.preventDefault();
    const res = await fetch('/api/auth/cerrarSesion');

    if (res.status === 200) {
      localStorage.removeItem(`${NOMBRE_APP}-userData`);
      alert('Sesión cerrada');
      window.location.assign('/login');
    }
  }

  return (
    <section
      className={`w-full flex justify-center flex-col items-center bg-white shadow-lg rounded-md md:w-[220px] overflow-hidden flex-shrink-0 ${className}`}
      {...props}
    >
      {/*  <!-- imagen de portada  --> */}
      <div
        className="h-[60px] bg-cover aspect-video bg-no-repeat w-full bg-center block"
        style={{
          backgroundImage: `url(${user?.portadaURL || bg})`,
        }}
      ></div>

      <div className="flex flex-col items-center gap-2 -translate-y-6">
        <AvatarUser client:only className="w-14 h-14" user={user} />
        <p className="text-sm w-[90%] text-center">{user?.displayName}</p>
      </div>

      <div className="flex flex-col gap-2 w-full text-sm">
        <span className="block border-b w-full border-gray-300"></span>
        <div className="flex justify-around w-full p-2">
          <p>Contactos</p>
          <p>23</p>
        </div>

        <span className="block border-b w-full border-gray-300"></span>
        <div className="flex justify-around w-full p-2 text-[12px]">
          <p>
            Contacte con las personas más cercanas{' '}
            <a
              href="/mi-red"
              className="text-violet-700 underline-offset-2 underline"
            >
              puedes encontrarlas aquí
            </a>
          </p>
        </div>
      </div>

      {user?.uid === userInSesion?.uid && (
        <form onSubmit={handleSubmit} className="text-black p-2">
          <button
            className="bg-rose-600 p-1 text-sm rounded-3xl text-white"
            type="submit"
          >
            Cerrar sesión
          </button>
        </form>
      )}
    </section>
  );
}

export { TarjetaUsuario };
