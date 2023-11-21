import Comentario from '../../../models/Comentario';
import Publicacion from '../../../models/Publicacion';
import { createResponse } from '../../../utils/createResponse';

export const POST = async ({ request }) => {
  const data = await request.json();

  try {
    let filtro = {};
    let page = data.page || 1;
    let limit = 10;

    if (data.autor_id) {
      filtro['autor'] = data.autor_id;
    }

    const publicaciones = await Publicacion.find(filtro)
      .sort({
        _id: -1,
      })
      .skip((page - 1) * limit) // offset
      .limit(limit)
      .populate({
        path: 'autor',
        select: '_id uid displayName photoURL portadaURL',
      });
    // .populate({
    //   path: 'comentarios',
    //   model: Comentario,
    //   populate: {
    //     path: 'autor',
    //     select: '_id uid displayName photoURL portadaURL',
    //   }, // de esta forma traigo los autores de los comentarios. Mejor voy ha crear un endpoint que traiga los comentarios
    // });

    return new Response(
      createResponse({
        publicaciones,
      })
    );
  } catch (error) {
    console.log(error);
    return new Response(createResponse(error));
  }
};
