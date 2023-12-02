import { subirMultimedia } from '../libs/storage';

/* Devuelve la url y el nombre del archivo */
export async function updateMultimedia({ user, file }) {
  const nombreFile = `${user?.email || user?.correoElectronico}-${Date.now()}`;

  const urlMultimedia = await subirMultimedia(file, nombreFile);
  return {
    nombreFile,
    urlMultimedia,
  };
}
