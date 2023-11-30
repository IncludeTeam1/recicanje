import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { app } from '../../../firebase/server';
import dbConnect from '../../../libs/dbConnect';
import Usuario from '../../../models/Usuario';
import { createResponse } from '../../../utils/createResponse';

export const POST = async ({ request, cookies }) => {
  try {
    const auth = getAuth(app);
    const db = getFirestore(app);

    const body = await request.json();
    const usuarioAuth = body.user;

    console.log(usuarioAuth);

    /* Obtener el token de las cabeceras de la solicitud */
    const idToken = request.headers.get('Authorization')?.split('Bearer ')[1];
    if (!idToken) {
      return new Response('Token no encontrado', { status: 401 });
    }
    /* Verifica el token */
    await dbConnect();
    await auth.verifyIdToken(idToken);

    /* Crear y establecer una cookie de sesión */
    const fiveDays = 60 * 60 * 24 * 5 * 1000;
    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn: fiveDays,
    });

    /* Crear el usuario y almacenarlo en la base de datos. */
    const resDb = await Usuario.create({
      uid: usuarioAuth.uid,
      correoElectronico: usuarioAuth.email,
      verificarCorreo: usuarioAuth.emailVerified,
      fechaDeRegistro: new Date(),
      ultimoInicioSesion: new Date(),
      nombre: usuarioAuth.nombre,
      apellido: usuarioAuth.apellido,
      displayName: usuarioAuth.displayName,
      photoURL: usuarioAuth.photoURL,
    });

    cookies.set('session', sessionCookie, {
      path: '/',
    });

    /* Lo almacena en firebase */
    const resFirestore = await db
      .collection('usuarios')
      .doc(usuarioAuth.uid)
      .set({
        displayName: usuarioAuth.displayName,
        photoURL: usuarioAuth.photoURL,
        uid: usuarioAuth.uid,
        correoElectronico: usuarioAuth.email,
        fechaDeRegistro: Date.now(),
      });

    const resFirestoreConversaciones = await db
      .collection('usuarioConversaciones')
      .doc(usuarioAuth.uid)
      .set({});

    console.log({ resFirestoreConversaciones });

    return new Response(
      createResponse({
        resDb,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        mensaje: 'Algo salió mal',
        error,
      }),
      { status: 400 }
    );
  }
};
