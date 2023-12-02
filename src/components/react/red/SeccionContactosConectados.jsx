import { useEffect, useState } from 'react';
import { NOMBRE_APP } from '../../../config';
import { AvatarUser } from '../AvatarUser';
import '../../../css/loaders.css';

import imgSinMensaje from '../../../assets/images/sin_mensajes.svg';
import { SinMensajes } from '../mensajes/SinMensajes';

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
      .then((data) => {
        console.log(data.usuarios);
        setUsuariosConectados(data.usuarios);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className=" w-full p-5 flex shadow-md flex-col  gap-3">
      {loading ? (
        <p className="text-center text-xl p-10 w-full flex justify-center relative ">
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
        </p>
      ) : usuariosConectados === null || usuariosConectados.length === 0 ? (
        <div className="flex justify-center flex-col items-center">
          <SinMensajes title="No tienes contactos" />
        </div>
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

              <a
                href="/mensajes"
                className=" flex items-center text-xs sm:text-base border py-1 px-2 rounded-lg border-teal-700 text-teal-700 hover:bg-teal-600 hover:outline-teal-600 hover:text-white transition-all truncate"
              >
                Enviar mensaje
              </a>
            </div>
          );
        })
      )}
    </div>
  );
}

export { SeccionContactosConectados };
