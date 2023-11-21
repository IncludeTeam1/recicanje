import Comentario from '../../../models/Comentario';

import { createResponse } from '../../../utils/createResponse';

export const POST = async ({ request }) => {
  const data = await request.json();
  const { limit, page } = data;

  const comentario = await Comentario.findById(data.comentario_id).populate({
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
      limit: limit || 2,
      skip: (page - 1) * limit,
    },
  });

  const comentarios = comentario ? comentario.comentariosRespuesta : [];

  console.log({ comentarios });

  return new Response(
    createResponse({
      msg: 'Comentarios Respuesta',
      comentarios,
    })
  );
};
