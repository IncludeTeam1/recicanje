/**
 *
 * @param {*} file
 * @returns {Promise <String>} Devuelve una url para poder ver el archivo temporalmente o un error si falla algo
 */
export function fileReader(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      resolve(e.target.result);
    };
    reader.onerror = (e) => {
      reject(e);
    };
  });
}
