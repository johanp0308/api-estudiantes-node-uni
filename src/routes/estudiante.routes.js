import { Router } from 'express';
import {createEstudiante} from '../controller/estudiantes.controller.js';

const router = Router();

router.post('/',createEstudiante);


export default router;