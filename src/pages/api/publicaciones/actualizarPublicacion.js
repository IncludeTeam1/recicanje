import Publicacion from '../../../models/Publicacion';
import { createResponse } from '../../../utils/createResponse';

export const PUT = async ({ request }) => {
  const data = await request.json();
  /* Recibir id de la publicación y id del usuario que le da me gusta. */

  const { accion, publicacion_id, user_id } = data;
  console.log({ accion, publicacion_id, user_id });

  try {
    const publicacion = await Publicacion.findById(publicacion_id);
    /* Verificamos si existe la publicación */
    if (!publicacion) {
      return new Response(
        createResponse({ error: 'Publicación no encontrada' }),
        {
          status: 404,
        }
      );
    }

    // Verificar si el usuario ya dio "me gusta"
    const indiceMeGusta = publicacion.meGustas.findIndex(
      (meGusta) => meGusta.autor.toString() === user_id
    );

    // Actualizar "me gusta" y cantidad
    if (accion === 'me_gusta') {
      if (indiceMeGusta === -1) {
        // Si el usuario aún no dio "me gusta", agregarlo a la lista
        publicacion.meGustas.push({
          autor: user_id,
          fecha: new Date(),
        });
        publicacion.cantidadMeGustas += 1;
      } else {
        // Si el usuario ya dio "me gusta", quitarlo de la lista
        publicacion.meGustas.splice(indiceMeGusta, 1);
        publicacion.cantidadMeGustas -= 1;
      }
    }

    // Guardar la publicación actualizada
    console.log(publicacion);
    await publicacion.save();

    return new Response(
      createResponse({ msg: 'Actualizado con éxito', publicacion }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      createResponse({ msg: 'Ha ocurrido un error', error: error.message }),
      {
        status: 500,
      }
    );
  }
};
