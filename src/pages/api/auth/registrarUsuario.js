import { getAuth } from "firebase-admin/auth";
import { app } from "../../../firebase/server";
import dbConnect from "../../../libs/dbConnect";
import Usuario from "../../../models/Usuario";

export const POST = async ({ request, cookies }) => {
  const auth = getAuth(app);

  await dbConnect();

  const body = await request.json();
  const usuarioAuth = body.user;

  console.log(body);
  console.log({ usuarioAuth });
  /* Obtener el token de las cabeceras de la solicitud */
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken) {
    return new Response("Token no encontrado", { status: 401 });
  }

  try {
    /* Verifica el token */
    await auth.verifyIdToken(idToken);

    /* Crear y establecer una cookie de sesión */
    const fiveDays = 60 * 60 * 24 * 5 * 1000;
    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn: fiveDays,
    });

    /* Crear el usuario y almacenarlo en la base de datos. */
    const resMongo = await Usuario.create({
      uid: usuarioAuth.uid,
      correoElectronico: usuarioAuth.email,
      verificarCorreo: usuarioAuth.emailVerified,
      fechaDeRegistro: new Date(),
      ultimoInicioSesion: new Date(),
      nombre: usuarioAuth.nombre,
      apellido: usuarioAuth.apellido,
      mostrarNombre: usuarioAuth.displayName,
    });

    console.log(resMongo);

    cookies.set("session", sessionCookie, {
      path: "/",
    });

    return new Response(resMongo, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        mensaje: "Algo salió mal",
        error,
      }),
      { status: 400 }
    );
  }
};
