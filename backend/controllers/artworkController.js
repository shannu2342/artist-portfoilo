import Artwork from '../models/Artwork.js';
import fs from 'fs';
import path from 'path';

export const listArtworks = async (req, res) => {
  const artworks = await Artwork.find().sort({ createdAt: -1 });
  return res.json(artworks);
};

export const createArtwork = async (req, res) => {
  try {
    const { title, description, category = 'general', price = '' } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'At least one image is required' });
    }

    // Create image paths from uploaded files
    const images = req.files.map(file => `/uploads/${file.filename}`);

    const artwork = await Artwork.create({ title, description, images, category, price });
    return res.status(201).json(artwork);
  } catch (error) {
    console.error('Error creating artwork:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const updateArtwork = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category, price } = req.body;

    const artwork = await Artwork.findById(id);
    if (!artwork) {
      return res.status(404).json({ message: 'Artwork not found' });
    }

    // Update basic fields
    if (title) artwork.title = title;
    if (description) artwork.description = description;
    if (category) artwork.category = category;
    if (price) artwork.price = price;

    // If new images were uploaded, add them to the images array
    if (req.files && req.files.length > 0) {
      const newImages = req.files.map(file => `/uploads/${file.filename}`);
      artwork.images = [...artwork.images, ...newImages];
    }

    await artwork.save();
    return res.json(artwork);
  } catch (error) {
    console.error('Error updating artwork:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const deleteArtwork = async (req, res) => {
  try {
    const { id } = req.params;
    const artwork = await Artwork.findByIdAndDelete(id);
    if (!artwork) {
      return res.status(404).json({ message: 'Artwork not found' });
    }

    // Delete uploaded images from server
    artwork.images.forEach(imagePath => {
      const fullPath = path.join(process.cwd(), 'public', imagePath);
      if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
      }
    });

    return res.json({ message: 'Artwork deleted' });
  } catch (error) {
    console.error('Error deleting artwork:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};
