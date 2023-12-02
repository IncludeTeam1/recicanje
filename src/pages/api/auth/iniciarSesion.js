import { app } from '../../../firebase/server';
import { getAuth } from 'firebase-admin/auth';
import Usuario from '../../../models/Usuario';
import dbConnect from '../../../libs/dbConnect';
import { createResponse } from '../../../utils/createResponse';

export const POST = async ({ request, cookies }) => {
  const auth = getAuth(app);
  const { uid } = await request.json();

  /* Obtener el token de las cabeceras de la solicitud */
  const idToken = request.headers.get('Authorization')?.split('Bearer ')[1];

  if (!idToken) {
    return new Response('Token no encontrado', { status: 401 });
  }

  /* Verificar la id del token */
  try {
    dbConnect();
    await auth.verifyIdToken(idToken);
    const [resDb] = await Usuario.find({
      uid: uid,
    });

    console.log({ resDb });

    if (!resDb) {
      return new Response(
        createResponse({
          resDb,
          msg: 'No se encontro este usuario',
          error: 'usuario_no_encontrado/404',
        }),
        {
          status: 400,
        }
      );
    }

    /* Crear y establecer una cookie de sesión */
    const fiveDays = 60 * 60 * 24 * 5 * 1000;
    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn: fiveDays,
    });

    /* Encontrar al usuario y traer sus datos. */

    cookies.set('session', sessionCookie, {
      path: '/',
    });
    console.log(resDb);
    return new Response(
      createResponse({
        resDb,
        _id: resDb._id,
        msg: 'incio correcto',
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log({ error });
    return new Response('Token invalido', { status: 401 });
  }
};
