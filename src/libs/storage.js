import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { multimediaStorageRef } from "../firebase/client";

/* Solo retorna la url de los archivos subidos */

export async function subirMultimedia(file, name) {
  try {
    const multimediaRef = ref(multimediaStorageRef, name);
    await uploadBytes(multimediaRef, file);
    const urlMultimeda = await getDownloadURL(multimediaRef);
    return urlMultimeda;
  } catch (error) {
    throw new Error(error);
  }
}
