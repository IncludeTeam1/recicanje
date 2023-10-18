export const respuestaDePublicaciones = [
  {
    _id: "1",
    autor: {
      idAutor: "5f1f0c56f36d2873bdf8869e",
      displayName: "Alexis y fido",
    },

    contenido: {
      tipo: "texto",
      texto: "Esta es una publicación de prueba con texto.",
      multimedia: [],
    },
    fechaPublicacion: new Date("2023-10-11T12:00:00Z"),
    comentarios: [
      {
        autor: "5f1f0c56f36d2873bdf886a3",
        texto: "¡Gran publicación!",
        fecha: new Date("2023-10-11T12:15:00Z"),
      },
    ],
    meGustas: ["5f1f0c56f36d2873bdf886a4", "5f1f0c56f36d2873bdf886a5"],
    ubicacion: {
      tipo: "Point",
      coordenadas: [-73.968541, 40.785091], // Longitud y latitud de Nueva York
    },
  },
  {
    _id: "2",
    autor: {
      idAutor: "5f1f0c56f36d2873bdf8869e",
      displayName: "Friedrich Nietzsche",
    },
    contenido: {
      tipo: "imagen",
      texto: "¡Vista impresionante!",
      multimedia: [
        "https://www.sopitas.com/wp-content/uploads/2018/11/aficionados-boca-juniors-practica-bombonera-final-copa-libertadores.png?resize=1024,531",
        "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/02/namek-dragon-ball.jpg?resize=1280%2C630&quality=80&ssl=1",
      ],
    },
    fechaPublicacion: new Date("2023-10-11T12:30:00Z"),
    comentarios: [
      {
        autor: "5f1f0c56f36d2873bdf886a7",
        texto: "Me encanta esta imagen.",
        fecha: new Date("2023-10-11T12:35:00Z"),
      },
    ],
    meGustas: ["5f1f0c56f36d2873bdf886a8"],
    ubicacion: {
      tipo: "Point",
      coordenadas: [-118.243685, 34.052235], // Longitud y latitud de Los Ángeles
    },
  },
  {
    _id: "3",
    autor: {
      idAutor: "5f1f0c56f36d2873bdf8869e",
      displayName: "Cristopher Robin",
    },
    contenido: {
      tipo: "imagen",
      texto: "Hermoso atardecer en la playa.",
      multimedia: [
        "https://thumbs.dreamstime.com/b/palmas-y-playa-tropical-con-la-arena-blanca-136606345.jpg",
      ],
    },
    fechaPublicacion: new Date("2023-10-11T12:45:00Z"),
    comentarios: [],
    meGustas: [],
    ubicacion: {
      tipo: "Point",
      coordenadas: [-80.1917902, 25.7616798], // Longitud y latitud de Miami
    },
  },
  {
    _id: "4",
    autor: {
      idAutor: "5f1f0c56f36d2873bdf8869e",
      displayName: "Leonardo Fabio",
    },
    contenido: {
      tipo: "texto",
      texto: "Saludos desde la montaña.",
      multimedia: [
        "https://www.elciudadanoweb.com/wp-content/uploads/2023/05/everest-22.jpg",
      ],
    },
    fechaPublicacion: new Date("2023-10-11T13:00:00Z"),
    comentarios: [
      {
        autor: "5f1f0c56f36d2873bdf886ab",
        texto: "¡Qué vista tan espectacular!",
        fecha: new Date("2023-10-11T13:15:00Z"),
      },
    ],
    meGustas: ["5f1f0c56f36d2873bdf886ac", "5f1f0c56f36d2873bdf886ad"],
    ubicacion: {
      tipo: "Point",
      coordenadas: [-118.168781, 33.703783], // Longitud y latitud de Big Sur, California
    },
  },
  {
    _id: "5",
    autor: {
      idAutor: "5f1f0c56f36d2873bdf8869e",
      displayName: "Miguel Àngel Duran",
    },
    contenido: {
      tipo: "texto",
      texto: "Recuerdos de un gran viaje.",
      multimedia: [
        "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/c5/8e/13.jpg",
      ],
    },
    fechaPublicacion: new Date("2023-10-11T13:30:00Z"),
    comentarios: [],
    meGustas: [],
    ubicacion: {
      tipo: "Point",
      coordenadas: [4.904138, 52.379189], // Longitud y latitud de Ámsterdam
    },
  },
];
