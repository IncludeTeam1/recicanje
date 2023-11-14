import Publicacion from '../../../models/Publicacion';
import Usuario from '../../../models/Usuario';
import { createResponse } from '../../../utils/createResponse';

export const POST = async ({ request }) => {
  const data = await request.json();
  console.log({data});

  try {
    let filtro = {};
    let page = data.page || 1;
    let limit = 10;

    if (data._id) {
      filtro['autor'] = data._id;
    }

    const publicaciones = await Publicacion.find(filtro)

      .sort({
        fechaPublicacion: -1,
      })
      .skip((page - 1) * limit) // offset
      .limit(limit)
      .populate({
        path: 'autor',
        select: 'uid displayName photoURL portadaURL',
      });
    publicaciones.forEach((publicacion) => {
      console.log(publicacion.autor);
    });

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
