import { HomeIcon } from "../../icons/HomeIcon";
import { MsgIcon } from "../../icons/MsgIcon";
import { UsersIcon } from "../../icons/UsersIcon";
import { AvatarUser } from "./AvatarUser";

function Header({ user = {} }) {
  return (
    <header className=" bg-emerald-950 shadow shadow-black ">
      <div className="w-[90%] mx-auto max-w-[1200px]  flex justify-between items-center">
        <div className="flex items-center gap-2   w-full md:max-w-[300px]">
          {/* Logo */}
          <h1 className="text-5xl font-bold">R</h1>
          {/* Buscador */}
          <input
            type="text"
            placeholder="buscar"
            className="p-1 rounded-md
          w-full 
          "
          />

          <a className="flex flex-col justify-center items-center" href="#">
            <AvatarUser className="w-10 h-8 md:hidden" user={user} />
          </a>
        </div>

        {/* NAV */}
        <nav
          className="
        fixed bottom-0 shadow-2xl bg-emerald-950 w-full left-0  
        
        
         md:static"
        >
          <ul
            className="flex gap-3 items-end
          justify-between px-5 py-1

          
          w-full md:max-w-[500px] ml-auto
          
          
          "
          >
            <li className="flex flex-col justify-center items-center w-[100px] h-[60px] border-t-2 md:border-t-0 md:border-b-2">
              <a className="flex flex-col justify-center items-center" href="#">
                <HomeIcon className="w-6 h-6  " />
                <span>Inicio</span>
              </a>
            </li>
            <li className="flex flex-col justify-center items-center w-[100px] h-[60px]  ">
              <a className="flex flex-col justify-center items-center" href="#">
                <UsersIcon className="w-6 h-6  " />
                <span>Mi red</span>
              </a>
            </li>
            <li className="flex flex-col justify-center items-center w-[100px] h-[60px]  ">
              <a className="flex flex-col justify-center items-center" href="#">
                <MsgIcon />
                <span>Mensajes</span>
              </a>
            </li>

            <li className="md:flex flex-col justify-center items-center hidden ">
              <a className="flex flex-col justify-center items-center" href="#">
                <AvatarUser className="w-6 h-6 md:w-8 md:h-8 " user={user} />
                <span>Perfil</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };
