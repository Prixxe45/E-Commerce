import {Router} from 'express';
import {registerValidationRules} from '../validator/auth.validator.js';
import {register} from '../controllers/auth.controller.js'; 

const router = Router();

router.post("/register", registerValidationRules, register);

export default router;