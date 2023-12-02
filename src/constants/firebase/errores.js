/* Objeto que tiene los mensajes de validación */
const erroresDeAutenticacion = {
  11000: 'Ya tiene una cuenta, incie sesión',
  'auth/invalid-login-credentials':
    'Datos invalidos, intentelo de nuevo o cree una cuenta',
  'auth/email-already-in-use': 'El correo ingresado ya esta en uso',
  'usuario_no_encontrado/404':
    'Este usuario no se ha econtrado, comuniquese con un administrador si cree quee sto es un error',
};

export function obtenerMensajeDeError(key) {
  return erroresDeAutenticacion[key] || 'Ocurrio un error desconocido';
}
