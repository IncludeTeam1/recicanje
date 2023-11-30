import { useEffect, useState } from 'react';
import { NOMBRE_APP } from '../../../config';
import { AvatarUser } from '../AvatarUser';

function SeccionContactosConectados() {
  const userInSesion = JSON.parse(
    localStorage.getItem(`${NOMBRE_APP}-userData`)
  );

  const [usuariosConectados, setUsuariosConectados] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/usuarios/obtenerContactos`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: userInSesion._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => setUsuariosConectados(data.usuarios))
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="border w-full p-5 flex shadow-md flex-col  gap-3">
      {loading ? (
        <p className="text-center text-xl p-10 w-full font-semibold">
          Trayendo panas
        </p>
      ) : usuariosConectados === null ? (
        'No tienes contactos aún'
      ) : (
        usuariosConectados.map((usuario) => {
          return (
            <div
              key={usuario.uid}
              className="p-2 flex justify-between gap-5 border  hover:bg-gray-100 transition-all  "
            >
              <a
                href={`/perfil/${usuario.uid}`}
                className="flex items-center gap-3"
              >
                {<AvatarUser user={usuario} />}{' '}
                <span className="font-semibold hover:underline">
                  {usuario.displayName}
                </span>
              </a>

              <button className="truncate text-xs sm:text-base border py-1 px-2 rounded-lg border-teal-700 text-teal-700 hover:bg-teal-600 hover:outline-teal-600 hover:text-white transition-all">
                Enviar mensaje
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}

export { SeccionContactosConectados };
