import { useEffect, useState } from 'react';
import imgDefault from '../../assets/images/placeholder.jpg';

/* Por lo general este componente renderiza el avatar actualizado, excepto el de las publicaciones y me imagino que el de las sección
de comentarios también de cada publicación, entonces agrego un prop que si exite entonces haga una petición y actualice el avatar.  */

function AvatarUser({ user, className = '' }) {
  return (
    <div
      className={`object-cover overflow-hidden  w-10 h-10 rounded-full flex-shrink-0 ${className}`}
    >
      <img
        className={`object-cover w-full h-full hover:scale-105 transition`}
        src={user?.photoURL || user?.picture || imgDefault.src}
        alt={`Avatar del usuario ${user?.displayName}`}
      />
    </div>
  );
}

export { AvatarUser };
