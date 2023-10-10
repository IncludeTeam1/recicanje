import { app } from "../../../firebase/server";
import { getAuth } from "firebase-admin/auth";

export const POST = async ({ request, cookies }) => {
  const auth = getAuth(app);

  /* Obtener el token de las cabeceras de la solicitud */
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken) {
    return new Response("Token no encontrado", { status: 401 });
  }

  /* Verificar la id del token */
  try {
    await auth.verifyIdToken(idToken);
    /* Crear y establecer una cookie de sesión */
    const fiveDays = 60 * 60 * 24 * 5 * 1000;
    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn: fiveDays,
    });

    /* Encontrar al usuario y traer sus datos. */

    cookies.set("session", sessionCookie, {
      path: "/",
    });

    return new Response(
      JSON.stringify({
        mensaje: "Inicio de sesión correcto",
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response("Token invalido", { status: 401 });
  }
};
