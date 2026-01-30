import { Router } from 'express';
import auth from '../middleware/auth.js';
import {
  listArtworks,
  createArtwork,
  updateArtwork,
  deleteArtwork
} from '../controllers/artworkController.js';

const router = Router();

router.get('/', listArtworks);
router.post('/', auth, createArtwork);
router.put('/:id', auth, updateArtwork);
router.delete('/:id', auth, deleteArtwork);

export default router;
