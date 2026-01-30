import Artwork from '../models/Artwork.js';

export const listArtworks = async (req, res) => {
  const artworks = await Artwork.find().sort({ createdAt: -1 });
  return res.json(artworks);
};

export const createArtwork = async (req, res) => {
  const { title, description, image, category = 'general', price = '' } = req.body || {};

  if (!title || !description || !image) {
    return res.status(400).json({ message: 'Title, description, and image are required' });
  }

  const artwork = await Artwork.create({ title, description, image, category, price });
  return res.status(201).json(artwork);
};

export const updateArtwork = async (req, res) => {
  const { id } = req.params;
  const updates = req.body || {};

  const artwork = await Artwork.findByIdAndUpdate(id, updates, { new: true });
  if (!artwork) {
    return res.status(404).json({ message: 'Artwork not found' });
  }

  return res.json(artwork);
};

export const deleteArtwork = async (req, res) => {
  const { id } = req.params;
  const artwork = await Artwork.findByIdAndDelete(id);
  if (!artwork) {
    return res.status(404).json({ message: 'Artwork not found' });
  }

  return res.json({ message: 'Artwork deleted' });
};
