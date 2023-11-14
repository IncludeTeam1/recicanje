import { useEffect, useState } from 'react';

function MultimediaPublicacion({ publicacion, imagenes }) {
  const [dimensionesImagenes, setDimensionesImagenes] = useState([]);

  useEffect(() => {
    /* Creamos una imagen para poder saber sus medidas, si son mayor a 600px entonces cambiamos su ancho
    para que no se vea tan larga */
    const obtenerDimensionesImagen = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          resolve({ width: img.width, height: img.height });
        };
      });
    };

    const obtenerDimensiones = async () => {
      const dimensiones = await Promise.all(
        imagenes.map((imagen) => obtenerDimensionesImagen(imagen.url))
      );
      setDimensionesImagenes(dimensiones);
    };

    obtenerDimensiones();
  }, [imagenes]);

  return (
    <div className={`flex justify-center  overflow-hidden  `}>
      {imagenes.map((image, i) => {
        return (
          <img
            key={i}
            className={`object-cover ${
              dimensionesImagenes[i]?.height > 600
                ? 'w-9/12 md:w-6/12'
                : 'max-w-full'
            }`}
            src={image.url}
            alt={`Publicación del usuario ${publicacion.autor.displayName}`}
          />
        );
      })}
    </div>
  );
}

export { MultimediaPublicacion };
