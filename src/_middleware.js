// import { getAuth } from 'firebase/auth';
// import { app } from './firebase/server';
// import Usuario from './models/Usuario';

// export async function onRequest({ locals, request }, next) {
//   const auth = getAuth(app);

//   /* Obtener el token de las cabeceras de la solicitud */
//   const idToken = request.headers.get('Authorization')?.split('Bearer ')[1];
//   if (!idToken) {
//     return new Response('Token no encontrado', { status: 401 });
//   }

//   /* Verificar la id del token */
//   try {
//     await auth.verifyIdToken(idToken);

//     let [resDb] = await Usuario.find({
//       uid: uid,
//     });
//     console.log({ resDb });
//     request.usuarioSesion = resDb;
//     /* Encontrar al usuario y traer sus datos. */

//     return next();
//   } catch (error) {
//     return new Response('Token invalido', { status: 401 });
//   }
// }
