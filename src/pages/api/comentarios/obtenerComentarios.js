import dbConnect from '../../../libs/dbConnect';
import Publicacion from '../../../models/Publicacion';
import { createResponse } from '../../../utils/createResponse';

export const POST = async ({ request }) => {
  const data = await request.json();
  const { limit, page } = data;
  console.log(data);
  const publicacion = await Publicacion.findById(data.publicacion_id).populate({
    path: 'comentarios',
    model: 'Comentario',

    populate: {
      path: 'autor',
      model: 'Usuario',
      select: '_id uid displayName photoURL portada URL',
    },
    options: {
      sort: { _id: -1 },
      limit: limit || 2,
      skip: (page - 1) * limit,
    },
  });

  const comentarios = publicacion ? publicacion.comentarios : [];

  return new Response(
    createResponse({
      msg: 'Comentarios',
      comentarios,
    })
  );
};
