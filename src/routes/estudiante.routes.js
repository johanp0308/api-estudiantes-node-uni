import { Router } from 'express';
import {createEstudiante, obtnerTodosEstudiantes, deleteEstudiante,obtnerEstudianteById,actualizarEstudiante} from '../controller/estudiantes.controller.js';

const router = Router();

router.post('/',createEstudiante);
router.get('/',obtnerTodosEstudiantes);
router.get('/id/:id',obtnerEstudianteById)
router.delete('/id/:id',deleteEstudiante);
router.put('/id/:id',actualizarEstudiante);

export default router;