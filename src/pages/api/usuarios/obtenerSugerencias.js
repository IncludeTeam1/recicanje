import Usuario from '../../../models/Usuario';
import dbConnect from '../../../libs/dbConnect';

export const GET = async ({ request }) => {
  /* En este caso este endpoint por ahora solo recibira un query que es limite cuando sea sugerencia, pero para
    la página no necesitara el limite
    */
  const query = request?.url.split('?')[1];
  const limit = parseInt(query?.split('=')[1]);
  const idToken = request.headers.get('Authorization')?.split('Bearer ')[1];

  try {
    dbConnect();

    /* Hacer de forma que se envie el uid del usuario en sesión y poder obtener su ubicación o sus amigos en común, para poder sugerir contactos cercanos o en común */
    let resDb;
    if (limit) {
      resDb = await Usuario.find({}).sort({ fechaDeRegistro: -1 }).limit(limit);
    } else {
      resDb = await Usuario.find({}).sort({ fechaDeRegistro: -1 });
    }

    return new Response(
      JSON.stringify({
        usuarios: resDb,
      })
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        mensaje: 'Algo salió mal',
        error,
      }),
      { status: 500 }
    );
  }
};
