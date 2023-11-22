import Usuario from '../../../models/Usuario';

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

    // Obtener información completa de los usuarios en solicitudesRecibidas
    const usuariosEnSolicitudes = await Usuario.find({
      _id: { $in: usuarioSesion.solicitudesRecibidas },
    });

    // Devolver solo la información necesaria de los usuarios
    const usuarios = usuariosEnSolicitudes.map(
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
        usuarios,
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
