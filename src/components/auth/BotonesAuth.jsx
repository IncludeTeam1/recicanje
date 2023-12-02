import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { obtenerMensajeDeError } from '../../constants/firebase/errores';
import { app } from '../../firebase/client';
import { getAuth } from 'firebase/auth';
import { GoogleIcon } from '../../icons/GoogleIcon';
import { FacebookIcon } from '../../icons/FacebookIcon';
import { NOMBRE_APP } from '../../config';
import { toast } from 'sonner';

function BotonesAuth({ urlFetch, action, idBtnGoogle, idBtnFacebook }) {
  const auth = getAuth(app);

  async function handleGoolge() {
    const provider = new GoogleAuthProvider();
    document.body.classList.add('opacity-10');
    document.body.classList.add('pointer-events-none');

    try {
      const credenciales = await signInWithPopup(auth, provider);
      const idToken = await credenciales.user.getIdToken();

      const user = {
        ...credenciales.user,
      };

      const response = await fetch(urlFetch, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ user, uid: user.uid }),
      });

      const { resDb, error } = await response.json();
      console.log({ resDb });
      if (response.status === 200 && resDb._id) {
        const userData = {
          uid: credenciales.user.uid,
          displayName: credenciales.user.displayName,
          email: credenciales.user.email,
          photoUrl: credenciales.user.photoURL,
          _id: resDb._id.toString(),
        };

        localStorage.setItem(
          `${NOMBRE_APP}-userData`,
          JSON.stringify(userData)
        );

        window.location.assign('/feed');
      }
      if (error) {
        console.log(error);
        return toast.error(obtenerMensajeDeError(error), {
          position: 'top-center',
          className: 'bg-rose-600 text-rose-900',
        });
      }
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        return;
      }
      if (error.code) {
        if (
          obtenerMensajeDeError(error.code) === 'Ocurrio un error desconocido'
        ) {
          alert(JSON.stringify(error));
        }
        toast.error(obtenerMensajeDeError(error), {
          position: 'top-center',
          className: 'bg-rose-600 text-rose-900',
        });
      }
    } finally {
      document.body.classList.remove('opacity-10');
      document.body.classList.remove('pointer-events-none');
    }
  }

  async function handleFacebook() {
    document.body.classList.add('opacity-10');
    document.body.classList.add('pointer-events-none');
    const provider = new FacebookAuthProvider();

    try {
      const credenciales = await signInWithPopup(auth, provider);
      const idToken = await credenciales.user.getIdToken();

      const user = {
        ...credenciales.user,
      };
      const response = await fetch(urlFetch, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ user, uid: user.uid }),
      });
      const { resDb } = await response.json();
      if (response.status === 200) {
        const userData = {
          uid: credenciales.user.uid,
          displayName: credenciales.user.displayName,
          email: credenciales.user.email,
          photoUrl: credenciales.user.photoURL,
          _id: resDb._id,
        };

        localStorage.setItem(
          `${NOMBRE_APP}-userData`,
          JSON.stringify(userData)
        );

        window.location.assign('/feed');
      }
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/popup-closed-by-user') {
        return;
      }
      obtenerMensajeDeError(error.code);
    } finally {
      document.body.classList.remove('opacity-10');
      document.body.classList.remove('pointer-events-none');
    }
  }

  return (
    <div
      id="containerBtns"
      data-action={action}
      className="flex justify-around gap-5 px-5"
    >
      <button
        onClick={() => {
          handleGoolge();
        }}
        data-url={urlFetch}
        id={idBtnGoogle}
        data-id={idBtnGoogle}
        className="flex-grow flex justify-center rounded bg-white"
      >
        <GoogleIcon client:only className="py-1" />
      </button>
      <button
        onClick={() => {
          handleFacebook();
        }}
        data-url={urlFetch}
        id={idBtnFacebook}
        data-id={idBtnFacebook}
        className="flex-grow flex justify-center rounded bg-blue-700"
      >
        <FacebookIcon client:only className="py-1" />
      </button>
    </div>
  );
}

export { BotonesAuth };
