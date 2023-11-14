import dbConnect from '../../../libs/dbConnect';
import Publicacion from '../../../models/Publicacion';
import { createResponse } from '../../../utils/createResponse';

export const DELETE = async ({ request }) => {
  const { idPublicacion } = await request.json();
  if (!idPublicacion) {
    return new Response(
      createResponse({
        msg: 'Id invalido',
      })
    );
  }
  console.log(idPublicacion);
  try {
    await dbConnect();
    const resDb = await Publicacion.findByIdAndDelete(idPublicacion);
    console.log(resDb);
    return new Response(
      createResponse({
        msg: 'Publicación eliminada correctamente',
        resDb,
      })
    );
  } catch (error) {
    console.log(error);
    return new Response(
      createResponse({
        msg: 'Ha ocurrido un error en el servidor',
        error,
      })
    );
  }
};
