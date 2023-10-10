import mongoose, { Schema, models, model } from "mongoose";
delete mongoose.connection.models['Usuario'];
const usuarioSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    default: null,
  },
  apellido: {
    type: String,
    default: null,
  },
  verificarCorreo: {
    type: Boolean,
    default: false,
  },
  fechaDeRegistro: {
    type: Date,
  },
  correoElectronico: {
    type: String,
    required: true,
  },
  ultimoInicioSesion: {
    type: Date,
    default: null,
  },
  mostrarNombre: {
    type: String,
  },
  // como si fueran amigos
  usuariosConectados: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
  ],
  publicaciones: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Publicacion",
    },
  ],
});

const Usuario = models.Usuario || model("Usuario", usuarioSchema);

export default Usuario;
