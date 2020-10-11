import { Router } from 'express';
import CategoryController from './controllers/CategoryController';
import ProductController from './controllers/ProductController';

const routes = new Router();

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:id', CategoryController.delete);

routes.get('/product', ProductController.index);
routes.post('/product', ProductController.store);
routes.put('/product/:id', ProductController.update);
routes.delete('/product/:id', ProductController.delete);

export default routes;
