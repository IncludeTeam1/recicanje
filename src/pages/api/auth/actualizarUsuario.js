import { app } from '../../../firebase/server';
import dbConnect from '../../../libs/dbConnect';
import Usuario from '../../../models/Usuario';
import { createResponse } from '../../../utils/createResponse';
import { getFirestore } from 'firebase-admin/firestore';

export const POST = async ({ request }) => {
  dbConnect();
  try {
    const db = getFirestore(app);
    const { data } = await request.json();
    console.log(data);

    const resDb = await Usuario.findOneAndUpdate(
      {
        uid: data.uid,
      },
      data,
      {
        new: true,
      }
    );

    const usuarioRef = db.collection('usuarios').doc(data.uid);
    const resFirestore = await usuarioRef.set(
      {
        displayName: data.displayName,
        photoURL: data.photoURL,
        portadaURL: data.portadaURL,
      },
      { merge: true }
    );

    console.log({ resFirestore });
    return new Response(
      createResponse({
        msg: 'Informacion actualizada',
        resDb,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      createResponse({
        msg: 'Ha ocurrido un error',
        error,
      }),
      { status: 500 }
    );
  }
};
