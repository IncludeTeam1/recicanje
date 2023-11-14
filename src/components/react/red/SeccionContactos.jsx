import { useEffect, useState } from 'react';
import { AvatarUser } from '../AvatarUser';
import { NOMBRE_APP } from '../../../config.js';

const bg =
  'https://img.freepik.com/vector-premium/patron-fisuras-reciclaje-separacion-basura-co2-concepto-cambio-climatico-doodle-vectorial_414360-2797.jpg';

function SeccionContactos() {
  const [sugerencias, setSugerencias] = useState([]);

  useEffect(() => {
    fetch(`/api/usuarios/obtenerSugerencias`)
      .then((res) => res.json())
      .then(({ usuarios }) => {
        const usuarioSesion = JSON.parse(
          localStorage.getItem(`${NOMBRE_APP}-userData`)
        );

        const u = usuarios.filter(
          (usuario) => usuario.uid !== usuarioSesion.uid
        );
        setSugerencias(u);
      });
  }, []);

  return (
    <section className="border p-5 w-full bg-white">
      <h2>Gente que quizas concozcas.</h2>

      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2">
        {sugerencias.map((u) => {
          return (
            <div
              key={u.uid}
              className="relative bg-white shadow-md rounded-md p-5  flex flex-col items-center justify-between "
            >
              {/* Foto de portada */}
              <div
                className="h-[80px] bg-cover aspect-video bg-no-repeat w-full bg-center absolute "
                style={{ backgroundImage: `url(${u.portadaURL || bg})` }}
              ></div>

              {/* Datos */}
              <a
                href={`/perfil/${u.uid}`}
                className="flex flex-col items-center justify-center text-center"
              >
                <AvatarUser user={u} className="w-24 h-24 z-10 translate-y-2" />

                <p className="pt-3 hover:underline underline-offset-2 transition">
                  {u.displayName}
                </p>
              </a>

              {/* Acción */}
              <button
                className="border border-emerald-600 text-emerald-700
                px-3 py-2 rounded-3xl  hover:text-white hover:border-white hover:bg-emerald-600 transition 
                "
              >
                {' '}
                ➕ Conectar
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export { SeccionContactos };
