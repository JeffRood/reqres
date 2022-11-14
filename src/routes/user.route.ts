import { Router } from 'express';
import { getUserAndCreate, getUsersAndBulk } from '../controllers/user.controller';

const router: Router = Router();

router.get('/', getUsersAndBulk);

router.get('/:id', getUserAndCreate )

export default router;