import { Router } from 'express';
import auth from '../middleware/auth.js';
import { getContent, updateContent } from '../controllers/contentController.js';

const router = Router();

router.get('/', getContent);
router.put('/', auth, updateContent);

export default router;
