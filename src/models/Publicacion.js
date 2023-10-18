import mongoose, { Schema, models, model } from "mongoose";

const publicacionSchema = new Schema({
  autor: {
    idAutor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
    displayName: String,
    required: true,
  },
  contenido: {
    tipo: String,
    texto: String,
    multimedia: [String], // urls de los enlaces a los videos o las fotos
  },
  fechaPublicacion: {
    type: Date,
    default: Date.now,
  },
  comentarios: [
    {
      autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
      },
      displayName: String,
      texto: String,
      fecha: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  meGustas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
  ],
  ubicacion: {
    tipo: {
      type: String, // Puede ser 'Point', 'Polygon', 'LineString', etc. según tus necesidades
      required: true,
    },
    coordenadas: {
      type: [Number], // [longitud, latitud]
      required: true,
    },
  },
});

const Publicacion =
  models.Publicacion || model("Publicacion", publicacionSchema);

export default Publicacion;
