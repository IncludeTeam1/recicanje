import { useEffect, useRef, useState } from 'react';
import { FlechaIcon } from '../../../icons/FlechaIcon';
import { AvatarUser } from '../AvatarUser';
import { BotonAccion } from '../BotonAccion';

function BurbujaMensajes({ user }) {
  //   const [open, setOpen] = useState(false);

  const [openState, setOpenState] = useState(false);
  function handleOpenSidebar() {
    setOpenState(!openState);
  }
  return (
    <div className=" hidden lg:flex  overflow-hidden shadow-2xl rounded-t-xl fixed bottom-0 right-0 mr-4   z-50 ">
      {/* Este es la caja que se agranada */}
      <aside
        className={`w-[288px] bg-white   flex pointer-events-auto   z-50 ${
          openState ? 'h-[70vh] transition-all' : 'h-[50px]'
        } transition-all`}
      >
        <div className="flex h-[50px] w-full border-b-2 items-center p-3 justify-between ">
          <div className="flex items-center gap-3">
            <AvatarUser className="w-[30px]  h-[30px]" user={user} />{' '}
            <p className=" ">Mensajes</p>
          </div>
          <BotonAccion onClick={() => handleOpenSidebar()}>
            <FlechaIcon
              className={`${openState ? 'rotate-[720deg]' : '-rotate-[180deg]'}
            transition-all duration-500`}
            />
          </BotonAccion>
        </div>
      </aside>
    </div>
  );
}

export { BurbujaMensajes };
