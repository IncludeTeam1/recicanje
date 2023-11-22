import Usuario from '../../../models/Usuario';
import { createResponse } from '../../../utils/createResponse';

export const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { usuarioInSesion, usuarioAConectar } = data;

    // Obtener los usuarios desde la base de datos
    const usuarioSesion = await Usuario.findById(usuarioInSesion);
    const usuarioDestino = await Usuario.findById(usuarioAConectar);

    // Verificar si los usuarios existen
    if (!usuarioSesion || !usuarioDestino) {
      return {
        status: 404,
        body: { message: 'Usuario no encontrado' },
      };
    }

    // Verificar si ya existe una solicitud de conexión

    if (usuarioSesion.solicitudesEnviadas.includes(usuarioAConectar)) {
      return new Response(
        createResponse({
          msg: 'Ya se hizo',
        }),
        { status: 404 }
      );
    }

    

    // Agregar la solicitud a la lista de solicitudes enviadas
    usuarioSesion.solicitudesEnviadas.push(usuarioAConectar);
    await usuarioSesion.save();

    // Agregar la solicitud a la lista de solicitudes recibidas del usuario destino
    usuarioDestino.solicitudesRecibidas.push(usuarioInSesion);
    await usuarioDestino.save();

    return new Response(
      createResponse({
        msg: 'Solicitud de conexión enviada con éxito',
        usuarioInSesion,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      createResponse({
        msg: 'Ha ocurrido un error',
        error,
      }),
      { status: 500 }
    );
  }
};
