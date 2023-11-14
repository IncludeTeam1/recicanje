import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

const comentarioSchema = new Schema({
  contendio: {
    type: String,
    imagenes: [string],
    videos: [string],
  },
  fechaComentario: {
    type: Date,
  },
  meGustas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
    },
  ],
  autor: {
    type: Schema.Types.ObjectId,
    ref: 'usuario', // relación
  },
  usuarioRespuesta: {
    type: Schema.Types.ObjectId,
    ref: 'usuario',
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
