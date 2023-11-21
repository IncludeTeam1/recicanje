import Comentario from '../../../models/Comentario';
import Publicacion from '../../../models/Publicacion';
import { createResponse } from '../../../utils/createResponse';

export const DELETE = async ({ request }) => {
  try {
    const { comentario_id, publicacion_id } = await request.json();

    // Obtén la publicación y verifica si existe
    const publicacion = await Publicacion.findById(publicacion_id);
    if (!publicacion) {
      return new Response(
        createResponse({ error: 'Publicación no encontrada' })
      );
    }

    // Filtra los comentarios para excluir el comentario a eliminar
    publicacion.comentarios = publicacion.comentarios.filter(
      (comentario) => comentario.toString() !== comentario_id
    );

    // Guarda la publicación actualizada
    await publicacion.save();

    // Elimina el comentario de la colección de comentarios
    await Comentario.findByIdAndDelete(comentario_id);
    const updatePublicacion = await Publicacion.findById(publicacion_id)
      .populate({
        path: 'autor',
        select: '_id uid displayName photoURL portadaURL',
      })
      .populate({
        path: 'comentarios',
        model: Comentario,
        populate: {
          path: 'autor',
          select: '_id uid displayName photoURL portadaURL',
        },
        options: {
          sort: { _id: -1 },
        },
      });
    return new Response(
      createResponse({
        msg: 'Comentario eliminado con éxito',
        publicacion: updatePublicacion,
      })
    );
  } catch (error) {
    console.log(error);
    return new Response(createResponse(error));
  }
};
