import Comentario from '../../../models/Comentario';
import { createResponse } from '../../../utils/createResponse';

export const PUT = async ({ request }) => {
  const data = await request.json();
  /* Recibir id de la publicación y id del usuario que le da me gusta. */
  console.log(data);
  const {
    comentario_id,
    user_id,
    accion,
    contenido,
    usuarioRespuesta = '',
  } = data;
  try {
    const comentario = await Comentario.findById(comentario_id).populate({
      path: 'autor',
      select: 'uid _id photoURL portadaURL displayName',
    });
    /*  .populate({
        path: 'comentariosRespuesta',
        populate: {
          path: 'autor',
          select: 'uid _id photoURL portadaURL displayName',
        },
      }); */

    /* Verificamos si existe la publicación */
    if (!comentario) {
      return new Response(
        createResponse({ error: 'comentario no encontrada' }),
        {
          status: 404,
        }
      );
    }
    // Actualizar "me gusta" y cantidad
    if (accion === 'me_gusta') {
      // Verificar si el usuario ya dio "me gusta"
      const indiceMeGusta = comentario.meGustas.findIndex(
        (meGusta) => meGusta.autor.toString() === user_id
      );
      if (indiceMeGusta === -1) {
        // Si el usuario aún no dio "me gusta", agregarlo a la lista
        comentario.meGustas.push({
          autor: user_id,
          fecha: Date.now(),
        });
        comentario.cantidadMeGustas += 1;
      } else {
        // Si el usuario ya dio "me gusta", quitarlo de la lista
        comentario.meGustas.splice(indiceMeGusta, 1);
        comentario.cantidadMeGustas -= 1;
      }
    } else if (accion === 'respuesta') {
      /* Crear un comentario y añadirlo a las respuestas en vez de a una publicación */
      const respuestaComentario = await Comentario.create({
        autor: user_id,
        contenido,
        fechaComentario: Date.now(),
        usuarioRespuesta: usuarioRespuesta || null,
      });

      comentario.comentariosRespuesta.push(respuestaComentario._id);

      await comentario.save();

      /* Traigo de nuevo el comentario */
      const updateComentario = await Comentario.findById(comentario_id)
        .populate({
          path: 'autor',
          select: 'uid _id photoURL portadaURL displayName',
        })
        .populate({
          path: 'usuarioRespuesta',
          select: 'uid _id photoURL portadaURL displayName',
        });
      /*  .populate({
          path: 'comentariosRespuesta',
          populate: {
            path: 'autor',
            select: 'uid _id photoURL portadaURL displayName',
          },
        }); */
      return new Response(
        createResponse({
          msg: 'Actualizado con éxito',
          comentario: updateComentario,
        }),
        {
          status: 200,
        }
      );
    }

    // Guardar la publicación actualizada

    await comentario.save();

    return new Response(
      createResponse({ msg: 'Actualizado con éxito', comentario }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      createResponse({ msg: 'Ha ocurrido un error', error: error.message }),
      {
        status: 500,
      }
    );
  }
};
