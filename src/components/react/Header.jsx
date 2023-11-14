import { useState, useEffect } from 'react';
/* Iconst */
import { HomeIcon } from '../../icons/HomeIcon';
import { MsgIcon } from '../../icons/MsgIcon';
import { UsersIcon } from '../../icons/UsersIcon';

/* Componentes */
import { AvatarUser } from './AvatarUser';

import logo from '../../assets/images/logo_demo.png';
import { NavLink } from './NavLink';

function Header({ user = {} }) {
  const menuItems = [
    {
      icon: <HomeIcon className="w-6 h-6" />,
      text: 'Inicio',
      href: '/feed',
    },
    {
      icon: <UsersIcon className="w-6 h-6" />,
      text: 'Mi red',
      href: '/mi-red',
    },
    {
      icon: <MsgIcon />,
      text: 'Mensajes',
      href: '#',
    },
    {
      icon: <AvatarUser className="w-6 h-6 md:w-8 md:h-8" user={user} />,
      text: 'Perfil',
      href: `/perfil/${user.uid}`,
    },
  ];

  const linksAsociados = {
    'page-feed': 'Inicio',
    'page-mi-red': 'Mi red',
    'page-mi-perfil': 'Perfil',
  };

  const [paginaActiva, setPaginaActiva] = useState('');

  useEffect(() => {
    const elementosObservar = document.querySelectorAll('.seccion-observar');

    if (elementosObservar.length > 0) {
      setPaginaActiva(elementosObservar[0].id);
    }
  }, []);

  return (
    <header
      className=" bg-emerald-950 shadow shadow-black text-emerald-100 
      static
    md:sticky md:top-0 z-50 md:backdrop-blur-sm bg-opacity-95
    "
    >
      <div className="w-[90%] mx-auto max-w-[1200px]  flex justify-between items-center">
        <div className="flex items-center gap-3    w-full md:max-w-[500px]">
          {/* Logo */}
          <a className="hover:scale-95  transition" href="/feed">
            <img
              src={logo.src}
              alt="Logo de recicanje"
              className="animate-pulse w-12 md:w-14 lg:w-16"
            />
          </a>

          {/* Buscador */}
          <input
            type="text"
            placeholder="buscar"
            className="p-1 rounded-md
          w-full 
          "
          />

          <a
            className="flex flex-col justify-center items-center"
            href={`/perfil/${user.uid}`}
          >
            <AvatarUser className="w-10 h-8 md:hidden" user={user} />
          </a>
        </div>

        {/* NAV */}
        <nav
          className="
        fixed bottom-0 shadow-2xl  w-full left-0  

        bg-emerald-950 md:bg-inherit
        
         md:static"
        >
          <ul
            className="flex gap-3 items-end
          justify-between px-5 py-1
          w-full md:max-w-[500px] ml-auto
          "
          >
            {menuItems.map((item, i) => {
              return (
                <NavLink
                  activo={item.text === linksAsociados[paginaActiva] || false}
                  className="hover:scale-105 w-[100px] h-[60px] rounded-lg hover:bg-emerald-900 "
                  item={item}
                  index={i}
                  key={i}
                />
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };
