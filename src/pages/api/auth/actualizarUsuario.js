import dbConnect from '../../../libs/dbConnect';
import Usuario from '../../../models/Usuario';
import { createResponse } from '../../../utils/createResponse';

export const POST = async ({ request }) => {
  dbConnect();
  try {
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
