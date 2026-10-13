import express from 'express';
import rendelesController from '../controllers/rendelesController.js';

const router = express.Router();

router.get('/', rendelesController.getAll);
router.get('/:id', rendelesController.getById);
router.post('/', rendelesController.create);

export default rendelesekRouter;