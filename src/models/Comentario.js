import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;
const comentarioSchema = new Schema({
  publicacion: {
    type: Schema.Types.ObjectId,
    ref: 'Publicacion',
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
  fechaComentario: {
    type: Date,
    default: Date.now(),
  },
  meGustas: [
    {
      autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
      },
      fecha: {
        type: Date,
        default: new Date(),
      },
    },
  ],
  cantidadMeGustas: {
    type: Number,
    default: 0,
  },
  autor: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario', // relación
    required: true,
  },
  usuarioRespuesta: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
  },
  comentariosRespuesta: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comentario', // referencia al mismo modelo
    },
  ],
});

const Comentario = models.Comentario || model('Comentario', comentarioSchema);
export default Comentario;
