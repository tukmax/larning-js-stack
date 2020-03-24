import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import auth from './app/middlewares/auth';
import RecipientController from './app/controllers/RecipientController';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.use(auth);
routes.post('/users', UserController.store);
routes.post('/recipients', RecipientController.store);
routes.get('/recipients', RecipientController.index);

export default routes;
