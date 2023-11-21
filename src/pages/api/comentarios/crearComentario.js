import Comentario from '../../../models/Comentario';
import Publicacion from '../../../models/Publicacion';
import { createResponse } from '../../../utils/createResponse';

export const POST = async ({ request }) => {
  const { data, publicacion_id } = await request.json();
  console.log(data);
  try {
    const resDbComment = await Comentario.create({
      ...data,
      fechaComentario: Date.now(),
    });
    const publicacion = await Publicacion.findById(publicacion_id);

    publicacion.comentarios.push(resDbComment._id);
    await publicacion.save();
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

    console.log(updatePublicacion);

    return new Response(
      createResponse({
        msg: 'Respuesta',
        updatePublicacion,
      })
    );
  } catch (error) {
    console.log(error);
    return new Response(
      createResponse({
        msg: 'Ha ocurrido un error',
        error,
      })
    );
  }
};
