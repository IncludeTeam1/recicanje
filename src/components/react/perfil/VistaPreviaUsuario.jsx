import { AvatarUser } from '../AvatarUser';
const bg =
  'https://img.freepik.com/vector-premium/patron-fisuras-reciclaje-separacion-basura-co2-concepto-cambio-climatico-doodle-vectorial_414360-2797.jpg';
function VistaPreviaUsuario({ user }) {
  return (
    <div className="w-full h-full shadow-md">
      {/*  <!-- imagen de portada  --> */}
      <div
        className=" h-[150px] bg-cover aspect-video bg-no-repeat w-full bg-center block"
        style={{
          backgroundImage: `url(${user?.portadaURL || bg})`,
        }}
      ></div>

      <div className="flex flex-col items-center gap-2 -translate-y-14">
        <AvatarUser client:only className="w-24 h-24 border-2" user={user} />
        <p className="text-sm w-[90%] text-center">{user?.displayName}</p>
      </div>
    </div>
  );
}

export { VistaPreviaUsuario };
