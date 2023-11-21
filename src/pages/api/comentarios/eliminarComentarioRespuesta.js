import Comentario from '../../../models/Comentario';
import Publicacion from '../../../models/Publicacion';
import { createResponse } from '../../../utils/createResponse';

export const DELETE = async ({ request }) => {
  try {
    const { comentario_id, comentarioPadre_id } = await request.json();

    // Obtén la publicación y verifica si existe
    const comentario = await Comentario.findById(comentarioPadre_id);
    if (!comentario) {
      return new Response(
        createResponse({ error: 'Publicación no encontrada' })
      );
    }

    // Filtra los comentarios para excluir el comentario a eliminar
    comentario.comentariosRespuesta = comentario.comentariosRespuesta.filter(
      (coment) => coment.toString() !== comentario_id
    );

    // Guarda la publicación actualizada
    await comentario.save();

    // Elimina el comentario de la colección de comentarios
    await Comentario.findByIdAndDelete(comentario_id);

    const updateComentario = await Comentario.findById(
      comentarioPadre_id
    ).populate({
      path: 'comentariosRespuesta',
      populate: [
        {
          path: 'autor',
          model: 'Usuario',
          select: '_id uid displayName photoURL portada URL',
        },
        {
          path: 'usuarioRespuesta',
          model: 'Usuario',
          select: '_id uid displayName photoURL portada URL',
        },
      ],

      /* populate: {
          path: 'comentariosRespuesta',
          populate: {
            path: 'autor',
            select: 'uid _id photoURL portadaURL displayName',
          },
        }, */
      options: {
        sort: { _id: -1 },
        /*  limit: limit || 2,
        skip: (page - 1) * limit, */
      },
    });
    return new Response(
      createResponse({
        msg: 'Comentario eliminado con éxito',
        comentario: updateComentario,
      })
    );
  } catch (error) {
    console.log(error);
    return new Response(createResponse(error));
  }
};
