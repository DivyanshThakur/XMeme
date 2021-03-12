import express from 'express';
import {getMemes, createMeme, getMemeById, updateMeme, deleteMeme, likeMeme} from '../controllers/memes.js';
const router = express.Router();

router.get('/', getMemes);
router.post('/', createMeme);
router.get('/:id', getMemeById);
router.patch('/:id', updateMeme);
router.delete('/:id', deleteMeme);
router.patch('/:id/likeMeme', likeMeme);

export default router;