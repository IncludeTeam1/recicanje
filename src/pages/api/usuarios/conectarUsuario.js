import Usuario from '../../../models/Usuario';
import { createResponse } from '../../../utils/createResponse';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { app } from '../../../firebase/server';

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

/* Cancela la solicitud de conexión */
export const DELETE = async ({ request }) => {
  try {
    const data = await request.json();
    const { usuarioInSesion, usuarioAConectar } = data;

    // Obtener los usuarios desde la base de datos
    let usuarioSesion = await Usuario.findById(usuarioInSesion);
    let usuarioDestino = await Usuario.findById(usuarioAConectar);

    // Verificar si los usuarios existen
    if (!usuarioSesion || !usuarioDestino) {
      return {
        status: 404,
        body: { message: 'Usuario no encontrado' },
      };
    }

    // Verificar si ya existe una solicitud de conexión

    if (!usuarioSesion.solicitudesEnviadas.includes(usuarioAConectar)) {
      return new Response(
        createResponse({
          msg: 'El usuario no ha solicitado esta conexión',
        }),
        { status: 404 }
      );
    }

    // Eliminar la solicitud a la lista de solicitudes enviadas
    usuarioSesion.solicitudesEnviadas =
      usuarioSesion.solicitudesEnviadas.filter((u) => {
        return u.toString() !== usuarioAConectar.toString();
      });

    await usuarioSesion.save();

    // Eliminar la solicitud a la lista de solicitudes recibidas del usuario destino
    usuarioDestino.solicitudesRecibidas =
      usuarioDestino.solicitudesRecibidas.filter((u) => {
        return u.toString() !== usuarioInSesion.toString();
      });
    await usuarioDestino.save();

    console.log({ usuarioSesion, usuarioDestino });

    return new Response(
      createResponse({
        msg: 'Solicitud eliminada enviada con éxito',
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

/* Confirma la conexión y crea el chat en la firestore */
export const PUT = async ({ request }) => {
  try {
    const db = getFirestore(app);
    const data = await request.json();
    const { usuarioInSesion, usuarioAConectar } = data;

    // Obtener los usuarios desde la base de datos
    let usuarioSesion = await Usuario.findById(usuarioInSesion);
    let usuarioDestino = await Usuario.findById(usuarioAConectar);

    // Verificar si los usuarios existen
    if (!usuarioSesion || !usuarioDestino) {
      return {
        status: 404,
        body: { message: 'Usuario no encontrado' },
      };
    }

    // Verificar si ya existe una  conexión

    if (
      usuarioSesion.usuariosConectados.includes(usuarioAConectar) ||
      usuarioDestino.usuariosConectados.includes(usuarioInSesion)
    ) {
      return new Response(
        createResponse({
          msg: 'Los usuarios ya son panas ',
        }),
        { status: 404 }
      );
    }

    // Eliminar la solicitud a la lista de solicitudes enviadas
    usuarioDestino.solicitudesEnviadas =
      usuarioDestino.solicitudesEnviadas.filter((u) => {
        return u.toString() !== usuarioInSesion.toString();
      });
    await usuarioDestino.save();
    // Eliminar la solicitud a la lista de solicitudes recibidas del usuario destino
    usuarioSesion.solicitudesRecibidas =
      usuarioSesion.solicitudesRecibidas.filter((u) => {
        return u.toString() !== usuarioAConectar.toString();
      });
    await usuarioSesion.save();

    /* Agregar en el array usuariosConectados a ambos usuarios  */
    usuarioSesion.usuariosConectados.push(usuarioAConectar);
    await usuarioSesion.save();
    usuarioDestino.usuariosConectados.push(usuarioInSesion);
    await usuarioDestino.save();

    /* Agregar en la firestore */
    const uidCombinado =
      usuarioSesion.uid > usuarioDestino.uid
        ? usuarioSesion.uid + usuarioDestino.uid
        : usuarioDestino.uid + usuarioSesion.uid;
    /* Crea el uidCombinado que será el identifiador para los mensajes, se añade en los dos usuarios. */
    db.collection('usuarioConversaciones')
      .doc(usuarioSesion.uid)
      .set(
        {
          [uidCombinado]: {
            uidCombinado,
            uidOtroUsuario: usuarioDestino.uid,
            ultimoMensaje: {},
          },
        },
        { merge: true }
      )
      .then(() => {
        console.log(
          `Se ha añadido ${uidCombinado} al array en usuarioConversaciones`
        );
      })
      .catch((error) => {
        console.error(
          'Error al actualizar el array en usuarioConversaciones:',
          error
        );
      });

    db.collection('usuarioConversaciones')
      .doc(usuarioDestino.uid)
      .set(
        {
          [uidCombinado]: {
            uidCombinado,
            uidOtroUsuario: usuarioSesion.uid,
            ultimoMensaje: {},
          },
        },
        { merge: true }
      )
      .then(() => {
        console.log(
          `Se ha añadido ${uidCombinado} al array en usuarioConversaciones`
        );
      })
      .catch((error) => {
        console.error(
          'Error al actualizar el array en usuarioConversaciones:',
          error
        );
      });

    const crearConversacion = await db
      .collection('conversaciones')
      .doc(uidCombinado)
      .set({ messages: [] });

    console.log({ crearConversacion });

    return new Response(
      createResponse({
        msg: 'Conexión confirmada, ya son panas 😀',
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
