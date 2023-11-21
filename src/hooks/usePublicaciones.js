import { useState, useEffect } from 'react';

export function usePublicaciones({ autor_id = '', page = 1 }) {
  const [publicaciones, setPublicaciones] = useState([]);
  const [loading, setLoading] = useState(false);

  const [nextLoading, setNextLoading] = useState(false);

  const [hayMasPublicaciones, setHayMasPublicaciones] = useState(false);

  /* Función para refrescar y traer las publicaciones  */

  async function fetchPublicaiones() {
    const urlFetch = `/api/publicaciones/obtenerPublicaciones`;
    let opciones = {
      method: 'POST',
      body: JSON.stringify({
        autor_id,
      }),
    };
    setLoading(true);
    try {
      const res = await fetch(urlFetch, opciones);
      const data = await res.json();
      setHayMasPublicaciones(data.publicaciones.length >= 10);

      setPublicaciones(data.publicaciones);
    } catch (error) {
      console.log(error);
      alert('Ha ocurrido un error');
    }

    setLoading(false);
  }

  async function manejadorPaginacion() {
    const urlFetch = `/api/publicaciones/obtenerPublicaciones`;
    let opciones = {
      method: 'POST',
      body: JSON.stringify({
        autor_id,
        page,
      }),
    };
    setNextLoading(true);
    try {
      const res = await fetch(urlFetch, opciones);
      const data = await res.json();

      setPublicaciones((antiguas) => {
        setHayMasPublicaciones(data.publicaciones.length >= 10);

        return antiguas.concat(data.publicaciones);
      });
    } catch (error) {
      console.log(error);
      alert('Ha ocurrido un error');
    }

    setNextLoading(false);
  }

  /* Paginación */
  useEffect(() => {
    if (page === 1) return;
    manejadorPaginacion();
  }, [page]);

  useEffect(() => {
    fetchPublicaiones();
  }, []);

  return {
    publicaciones,
    loading,
    fetchPublicaiones,
    nextLoading,
    hayMasPublicaciones,
  };
}
