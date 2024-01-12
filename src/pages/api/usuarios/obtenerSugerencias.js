import Usuario from '../../../models/Usuario';
import dbConnect from '../../../libs/dbConnect';

export const GET = async ({ request }) => {
  /* En este caso este endpoint por ahora solo recibira un query que es limite cuando sea sugerencia, pero para
    la página no necesitara el limite
    */
  const query = request?.url.split('?')[1];
  const _id = query?.split('=')[1].split('&')[0];
  const limit = query?.split('&')[1]?.split('=')[1];
  console.log({ query, limit, _id });
  try {
    dbConnect();

    /* Hacer de forma que se envie el uid del usuario en sesión y poder obtener su ubicación o sus amigos en común, para poder sugerir contactos cercanos o en común */

    const usuarioSesion = await Usuario.findById(_id);

    // Verificar si el usuario en sesión existe
    if (!usuarioSesion) {
      return {
        status: 404,
        body: { message: 'Usuario no encontrado' },
      };
    }

    // Obtener los IDs de usuarios en las listas
    const idsEnviadas = usuarioSesion.solicitudesEnviadas.map((id) =>
      id.toString()
    );
    const idsRecibidas = usuarioSesion.solicitudesRecibidas.map((id) =>
      id.toString()
    );
    const idsConectados = usuarioSesion.usuariosConectados.map((id) =>
      id.toString()
    );

    // Encontrar usuarios que no están en ninguna de las listas
    const usuariosDisponibles = await Usuario.find({
      _id: {
        $nin: [_id, ...idsEnviadas, ...idsRecibidas, ...idsConectados],
      },
    }).limit(parseInt(limit));

    // Devolver solo la información necesaria de los usuarios
    const usuariosSinId = usuariosDisponibles.map(
      ({
        _id,
        uid,
        nombre,
        apellido,
        correoElectronico,
        displayName,
        photoURL,
        portadaURL,
      }) => ({
        _id,
        uid,
        nombre,
        apellido,
        correoElectronico,
        displayName,
        photoURL,
        portadaURL,
      })
    );

    return new Response(
      JSON.stringify({
        usuarios: usuariosSinId,
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

export const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { user_id } = data;

    // Obtener el usuario en sesión
    const usuarioSesion = await Usuario.findById(user_id);

    // Verificar si el usuario en sesión existe
    if (!usuarioSesion) {
      return {
        status: 404,
        body: { message: 'Usuario no encontrado' },
      };
    }

    // Obtener los IDs de usuarios en las listas
    const idsEnviadas = usuarioSesion.solicitudesEnviadas.map((id) =>
      id.toString()
    );
    const idsRecibidas = usuarioSesion.solicitudesRecibidas.map((id) =>
      id.toString()
    );
    const idsConectados = usuarioSesion.usuariosConectados.map((id) =>
      id.toString()
    );

    // Encontrar usuarios que no están en ninguna de las listas
    const usuariosDisponibles = await Usuario.find({
      _id: {
        $nin: [user_id, ...idsEnviadas, ...idsRecibidas, ...idsConectados],
      },
    });

    // Devolver solo la información necesaria de los usuarios
    const usuariosSinId = usuariosDisponibles.map(
      ({
        _id,
        uid,
        nombre,
        apellido,
        correoElectronico,
        displayName,
        photoURL,
        portadaURL,
      }) => ({
        _id,
        uid,
        nombre,
        apellido,
        correoElectronico,
        displayName,
        photoURL,
        portadaURL,
      })
    );

    return new Response(
      JSON.stringify({
        usuarios: usuariosSinId,
      })
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ uid, mensaje: 'Algo salió mal', error }),
      { status: 500 }
    );
  }
};
