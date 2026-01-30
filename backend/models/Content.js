import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema(
  {
    about: { type: String, default: '' },
    services: { type: String, default: '' },
    terms: { type: String, default: '' },
    whatsapp: { type: String, default: '' }
  },
  { timestamps: true }
);

export default mongoose.model('Content', contentSchema);
