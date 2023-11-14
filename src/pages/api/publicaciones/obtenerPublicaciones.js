import Publicacion from '../../../models/Publicacion';
import { createResponse } from '../../../utils/createResponse';

export const POST = async ({ request }) => {
  const data = await request.json();
  console.log(data);

  try {
    let filtro = {};
    let page = data.page || 1;
    let limit = 10;

    if (data.uid) {
      filtro['autor.uid'] = data.uid;
    }

    const publicaciones = await Publicacion.find(filtro)
      .sort({
        fechaPublicacion: -1,
      })
      .skip((page - 1) * limit) // offset
      .limit(limit);

    return new Response(
      createResponse({
        publicaciones,
      })
    );
  } catch (error) {
    return new Response(createResponse(error));
  }
};
