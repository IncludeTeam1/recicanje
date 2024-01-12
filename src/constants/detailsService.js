import imgLogin from '@/assets/screnshots/recicanje_1.png';
import imgFeed from '@/assets/screnshots/recicanje_2.png';
import imgContacts from '@/assets/screnshots/recicanje_3.png';
import imgChat from '@/assets/screnshots/recicanje_4.png';
import imgProfile from '@/assets/screnshots/recicanje_5.png';
export const detailService = {
  login: {
    img: imgLogin,
    data: {
      title: 'Iniciar sesión',
      description: 'Crea e inicia sesión fácilmente.',
    },
    href: '/login',
  },
  feed: {
    img: imgFeed,
    data: {
      title: 'Feed',
      description:
        'Comparte tus estrategias y aprende de los demás sobre cómo ayudar al planeta Tierra.',
    },
    href: '/feed',
  },
  contacts: {
    img: imgContacts,
    data: {
      title: 'Red de amigos',
      description:
        'Crea conexiones con personas u organizaciones para tener un mayor impacto.',
    },
    href: '/feed',
  },
  chat: {
    img: imgChat,
    data: {
      title: 'Chat',
      description:
        'Comunícate directamente con tus contactos a través de nuestra plataforma.',
    },
    href: '/feed',
  },
  profile: {
    img: imgProfile,
    data: {
      title: 'Personaliza tu perfil',
      description: 'Personaliza tus fotos y descripción para darte a conocer.',
    },
    href: '/feed',
  },
};
