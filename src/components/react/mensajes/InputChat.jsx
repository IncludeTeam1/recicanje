import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { db } from '../../../firebase/client';
import { NOMBRE_APP } from '../../../config';

import '../../../css/loaders.css';
import { toast } from 'sonner';

function InputChat({ usuarioDestino, chat }) {
  const usuarioInSesion = JSON.parse(
    localStorage.getItem(`${NOMBRE_APP}-userData`)
  );
  const [contenidoText, setContenidoText] = useState('');
  const [loadingEnvio, setLoadingEnvio] = useState(false);
  const inputRef = useRef();

  function manejarInput(e) {
    setContenidoText(e.target.value);
  }

  async function handleSubmit() {
    if (!contenidoText.trim())
      return toast.error('Ingresa un mensaje valido...');
    const mensaje = {
      text: contenidoText,
      fecha: Date.now(),
      visto: false,
    };
    setLoadingEnvio(true);
    try {
      /* Actualizar la colección conversaciones y añadir los mensajes */
      await updateDoc(doc(db, 'conversaciones', chat.uidCombinado), {
        messages: arrayUnion({
          contenido: {
            texto: contenidoText,
          },
          fecha: Date.now(),
          autor: usuarioInSesion.uid,
        }),
      });

      /* Acutalizar en usuario destino */
      await updateDoc(
        doc(db, 'usuarioConversaciones', usuarioDestino.uid),
        {
          [chat.uidCombinado]: {
            uidCombinado: chat.uidCombinado,
            uidOtroUsuario: usuarioInSesion.uid,
            uidEmite: usuarioInSesion.uid,
            ultimoMensaje: mensaje,
          },
        },
        { merge: true }
      );

      // Actualizar el usuario en sesion
      await updateDoc(
        doc(db, 'usuarioConversaciones', usuarioInSesion.uid),
        {
          [chat.uidCombinado]: {
            uidCombinado: chat.uidCombinado,
            uidOtroUsuario: usuarioDestino.uid,
            uidEmite: usuarioInSesion.uid,
            ultimoMensaje: mensaje,
          },
        },
        { merge: true }
      );
      setContenidoText('');
      inputRef.current.target.value = '';
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingEnvio(false);
    }
  }
  useEffect(() => {
    setContenidoText('');
    if (inputRef.current.target) {
      inputRef.current.target.value = '';
    }
  }, [chat]);
  return (
    <div className="mt-3 flex flex-col md:flex-row  gap-2">
      <textarea
        ref={inputRef}
        value={contenidoText}
        type="text"
        placeholder="Envia un mensaje"
        className="block min-h-28  max-h-36 outline-none border resize-none
   py-4 px-2  w-full
  "
        onChange={manejarInput}
      />
      <button
        disabled={loadingEnvio}
        onClick={handleSubmit}
        className={`border p-1 bg-teal-700 w-10/12 md:w-auto mx-auto md:mx-0 rounded-lg flex justify-center items-center text-white ${
          loadingEnvio && 'opacity-70'
        }`}
      >
        {' '}
        {loadingEnvio ? <div class="container momentun"></div> : 'Enviar'}
      </button>
    </div>
  );
}

export { InputChat };
