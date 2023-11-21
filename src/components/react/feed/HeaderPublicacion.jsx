import { useEffect, useState } from 'react';
import { NOMBRE_APP } from '../../../config';
import { AvatarUser } from '../AvatarUser';
import { BotonAccion } from '../BotonAccion';
import { createTimeAgo } from '../../../helpers/timeAgo';

function HeaderPublicacion({ refresh, publicacion }) {
  const usuarioSesion = JSON.parse(
    localStorage.getItem(`${NOMBRE_APP}-userData`)
  );

  const [updatedUser, setUpdatedUser] = useState(publicacion.autor); // que sea por defecto el usuario de las props

  /* useEffect(() => {
    fetch(`/api/usuarios/obtenerUsuario`, {
      method: 'POST',
      body: JSON.stringify({ uid: publicacion.autor.uid }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdatedUser(data.infoUsuario);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []); */
  /* Eliminar publicacion */
  async function handleDeletePublicacion(e) {
    const conf = confirm('Seguro desea eliminar esta publicación?');
    if (conf) {
      try {
        const res = await fetch(`/api/publicaciones/eliminarPublicacion`, {
          method: 'DELETE',
          body: JSON.stringify({
            idPublicacion: publicacion._id,
          }),
        });
        if (res.status === 200) {
          alert('Publicación elimnada correctamente');
          refresh();
        } else {
          alert('No se ha podido eliminar la publicación');
        }
      } catch (error) {
        console.log(error);
        alert('No se ha podido eliminar la publicación');
      }
    }
  }

  return (
    <header className="flex p-3 justify-between border-b pb-2 w-full">
      <a className="flex gap-2 w-  " href={`/perfil/${publicacion.autor.uid}`}>
        <AvatarUser user={updatedUser} />{' '}
        <p className="flex flex-col ">
          <span className="font-bold text-gray-600 tracking-wide">
            {updatedUser.displayName}
          </span>
          <small className="text-[12px]">
            {' '}
            {createTimeAgo(publicacion.fechaPublicacion, 'long')}
          </small>
        </p>
      </a>

      {usuarioSesion.uid === publicacion.autor.uid && (
        <div>
          <BotonAccion
            onClick={handleDeletePublicacion}
            className=" flex justify-center items-center"
          >
            <span className="text-xl">🗑</span>
          </BotonAccion>
        </div>
      )}
    </header>
  );
}

export { HeaderPublicacion };
