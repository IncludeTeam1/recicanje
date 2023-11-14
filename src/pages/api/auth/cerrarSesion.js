import { createResponse } from '../../../utils/createResponse';

export const GET = async ({ cookies }) => {
  cookies.delete('session', {
    path: '/',
  });
  return new Response(
    createResponse({
      msg: 'Sesión cerrada correctamente',
    })
  );
};
