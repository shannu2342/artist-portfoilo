import mongoose from 'mongoose';

const artworkSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    category: { type: String, default: 'general', trim: true },
    price: { type: String, default: '', trim: true }
  },
  { timestamps: true }
);

export default mongoose.model('Artwork', artworkSchema);
