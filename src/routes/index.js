import { Router } from 'express';
import home from './home';

const routes = Router();

routes.get('/home', home);

export default routes;
