import { useEffect, useState } from 'react';

import { NOMBRE_APP } from '../../../config.js';
import { BotonAccion } from '../BotonAccion.jsx';
import { TarjetaContacto } from './TarjetaContacto.jsx';
import { ReciclarIcon } from '../../../icons/ReciclarIcon.jsx';

function SeccionContactos() {
  const [sugerencias, setSugerencias] = useState([]); // arreglo que se va a renderizar si ó si
  const [loading, setLoading] = useState(false);

  const [seccionActiva, setSeccionActiva] = useState('sugerencia');

  const userInSesion = JSON.parse(
    localStorage.getItem(`${NOMBRE_APP}-userData`)
  );
  /* Traer sugerencias */
  useEffect(() => {
    let url = `/api/usuarios/obtenerSugerencias`;

    if (seccionActiva === 'pendiente') {
      url = `/api/usuarios/obtenerPendientes`;
    } else if (seccionActiva === 'confirmar') {
      url = `/api/usuarios/obtenerConfirmar`;
    }
    setLoading(true);
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ user_id: userInSesion._id }),
    })
      .then((res) => res.json())
      .then(({ usuarios }) => {
        setSugerencias(usuarios);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [seccionActiva]);

  /* Mandar sesión de pendiente */
  async function handleConectar(usuarioAConectar) {
    const res = await fetch(`/api/usuarios/conectarUsuario`, {
      method: 'POST',
      body: JSON.stringify({
        usuarioInSesion: userInSesion._id,
        usuarioAConectar: usuarioAConectar._id,
      }),
    });

    const resData = await res.json();
    setSeccionActiva('pendiente');
    console.log(resData);
  }

  return (
    <section className="border p-5 w-full bg-white">
      <h2 className="text-xl md:text-2xl">Gente que quizas concozcas.</h2>
      <div className="flex justify-around py-2">
        <BotonAccion
          onClick={() => setSeccionActiva('sugerencia')}
          className={`${
            seccionActiva === 'sugerencia' ? 'scale-105 shadow-xl border' : ''
          }`}
        >
          Sugerencias
        </BotonAccion>

        <BotonAccion
          onClick={() => setSeccionActiva('pendiente')}
          className={`${
            seccionActiva === 'pendiente' ? 'scale-105 shadow-xl border' : ''
          }`}
        >
          Pendientes
        </BotonAccion>

        <BotonAccion
          onClick={() => setSeccionActiva('confirmar')}
          className={`${
            seccionActiva === 'confirmar' ? 'scale-105 shadow-xl border' : ''
          }`}
        >
          Recibidas
        </BotonAccion>
      </div>

      {loading ? (
        <div className="animate-spin flex justify-center">
          <ReciclarIcon className="w-20 h-20 stroke-teal-950 animate-spin" />
        </div>
      ) : (
        <div className="w-full  grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2">
          {/* Renderizo Sugerencias */}
          {seccionActiva === 'sugerencia' &&
            (sugerencias.length > 0 ? (
              sugerencias.map((u) => {
                return (
                  <TarjetaContacto
                    key={u._id}
                    handleClik={handleConectar}
                    usuario={u}
                  />
                );
              })
            ) : (
              <div className="text-xl text-center flex justify-center col-span-2 md:col-span-3 lg:col-span-4  w-full">
                <p>No hay contactos</p>
              </div>
            ))}

          {seccionActiva === 'pendiente' &&
            (sugerencias.length > 0 ? (
              sugerencias.map((u) => {
                return (
                  <TarjetaContacto
                    key={u._id}
                    type={seccionActiva}
                    handleClik={handleConectar}
                    usuario={u}
                  />
                );
              })
            ) : (
              <div className="text-xl text-center flex justify-center col-span-2 md:col-span-3 lg:col-span-4  w-full">
                <p>No hay contactos pendientes</p>
              </div>
            ))}

          {seccionActiva === 'confirmar' &&
            (sugerencias.length > 0 ? (
              sugerencias.map((u) => {
                return (
                  <TarjetaContacto
                    key={u._id}
                    type={seccionActiva}
                    handleClik={handleConectar}
                    usuario={u}
                  />
                );
              })
            ) : (
              <div className="text-xl text-center flex justify-center col-span-2 md:col-span-3 lg:col-span-4  w-full">
                <p>No hay usuarios a confirmar</p>
              </div>
            ))}
        </div>
      )}
    </section>
  );
}

export { SeccionContactos };
