import { Router } from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = Router();

router.get('/', AppController.getHomePage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getStudentsByMajor);

export default router;
