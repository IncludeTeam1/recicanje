import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;
delete mongoose.connection.models['Publicacion'];
const publicacionSchema = new Schema({
  autor: {
    idAutor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    photoURL: String,
    uid: String,
  },
  contenido: {
    tipo: String,
    texto: String,
    multimedia: [
      {
        url: String,
        nombreFile: String,
      },
    ], // urls de los enlaces a los videos o las fotos
  },
  fechaPublicacion: {
    type: Date,
    default: Date.now,
  },
  comentarios: [
    {
      autor: {
        idAutor: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Usuario',
          required: true,
        },
        displayName: {
          type: String,
          required: true,
        },
        photoURL: String,
        uid: String,
      },

      texto: String,
      fecha: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  meGustas: [
    {
      autor: {
        idAutor: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Usuario',
          required: true,
        },
        displayName: {
          type: String,
          required: true,
        },
        photoURL: String,
        uid: String,
      },

      fecha: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  /* ubicacion: {
    tipo: {
      type: String, // Puede ser 'Point', 'Polygon', 'LineString', etc. según tus necesidades
      required: true,
    },
    coordenadas: {
      type: [Number], // [longitud, latitud]
      required: true,
    },
  }, */
});

const Publicacion =
  models.Publicacion || model('Publicacion', publicacionSchema);

export default Publicacion;
