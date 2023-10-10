import mongoose, { Schema, models, model } from "mongoose";

const publicacionSchema = new Schema({
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario", // Referencia al modelo de usuario
    required: true,
  },
  contenido: {
    type: String,
    texto: String,
    imagenes: [String],
    videos: [String],
  },
  fechaPublicacion: {
    type: Date,
  },
  comentarios: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comentario",
    },
  ],

  meGustas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
  ],
});

const Publicacion = models.Publicacion || model("Publicacion", usuarioSchema);

export default Publicacion;
