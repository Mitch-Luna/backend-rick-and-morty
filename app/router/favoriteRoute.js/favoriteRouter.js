import express from 'express'
import { create, index, remove } from '../../controller/favoriteController.js';
const router = express.Router();


router.get('/', index);

// Ruta para agregar un nuevo favorito
router.post('/', create);

// Ruta para eliminar un favorito
router.delete('/:id', remove);

// Exportar el enrutador
export default router;
