import { getAuth } from "firebase/auth";
import dbConnect from "../../../libs/dbConnect";
import { app } from "../../../firebase/server";
import Publicacion from "../../../models/Publicacion";

export const POST = async ({ request, cookies }) => {
  const { data } = await request.json();
  console.log(data);
  try {
    // const auth = getAuth(app);

    // /* Obtener el token de las cabeceras de la solicitud */
    // const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
    // if (!idToken) {
    //   return new Response("Token no encontrado", { status: 401 });
    // }
    // /* Verifica el token */
    // const verify = await auth.verifyIdToken(idToken);
    // console.log(verify)
    // if (!verify) {
    //   return new Response("No autorizado", { status: 401 });
    // }

    await dbConnect();

    const resDb = await Publicacion.create({
      ...data,
    });

    return new Response(JSON.stringify({ resDb, status: 200 }));

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
