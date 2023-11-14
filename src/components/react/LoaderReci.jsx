import logo from '../../assets/images/logo_reciclaje.gif';

function LoaderReci() {
  return (
    <div
      style={{
        backgroundImage: `url(${logo.src})`,
      }}
      className="w-full  min-h-[5em] flex items-center justify-center   bg-contain bg-center bg-no-repeat"
    >
      <p>
        <marquee
          loop="3"
          direction="right"
          className="text-[0.7em]   font-bold tracking-[0.2em]  
        text-emerald-700
       "
        >
          Cargando...
        </marquee>
      </p>
    </div>
  );
}

export { LoaderReci };
