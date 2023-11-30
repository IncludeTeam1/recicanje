import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/client';
export async function getUsuarioDocument(uid) {
  const usuarioDoc = await getDoc(doc(db, 'usuarios', uid));
  return usuarioDoc;
}
