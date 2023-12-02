import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

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
    unique: true,
  },
  ultimoInicioSesion: {
    type: Date,
    default: null,
  },
  displayName: {
    type: String,
  },
  photoURL: {
    type: String,
  },
  portadaURL: {
    type: String,
  },
  // como si fueran amigos
  // Lista de usuarios a los que se ha enviado una solicitud de conexión
  solicitudesEnviadas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
    },
  ],

  // Lista de usuarios que han enviado una solicitud de conexión
  solicitudesRecibidas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
    },
  ],

  // Lista de usuarios conectados
  usuariosConectados: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
    },
  ],
  publicaciones: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Publicacion',
    },
  ],
});

const Usuario = models.Usuario || model('Usuario', usuarioSchema);

export default Usuario;
