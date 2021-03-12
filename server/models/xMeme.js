import mongoose from 'mongoose';

const memeSchema = mongoose.Schema({
    name: String,
    url: String,
    caption: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

memeSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    }
  });

const xMeme = mongoose.model('xMeme', memeSchema);

export default xMeme;