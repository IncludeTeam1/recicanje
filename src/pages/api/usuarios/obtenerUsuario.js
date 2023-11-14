import Usuario from '../../../models/Usuario';
import dbConnect from '../../../libs/dbConnect';

export const POST = async ({ request }) => {
  const { uid } = await request.json();

  try {
    dbConnect();

    let [resDb] = await Usuario.find({
      uid: uid,
    });

    return new Response(
      JSON.stringify({
        infoUsuario: resDb,
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
