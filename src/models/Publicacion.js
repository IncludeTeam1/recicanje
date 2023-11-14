import { string } from 'astro/zod';
import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;
delete mongoose.connection.models['Publicacion'];
const publicacionSchema = new Schema({
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
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
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comentario',
    },
    ,
  ],
  meGustas: [
    {
      autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
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
