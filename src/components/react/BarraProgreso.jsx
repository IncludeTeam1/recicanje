import { useEffect, useState } from "react";
import "../../css/barraProgreso.css";

function BarraProgreso() {
  const [carga, setCarga] = useState(-100);

  useEffect(() => {
    window.onload = (e)=>{
        console.log(e)
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="barra-de-carga">
      <span
        style={{
          transform: `translateX(${carga}%)`,
        }}
        className="carga"
      ></span>
    </div>
  );
}

export { BarraProgreso };
