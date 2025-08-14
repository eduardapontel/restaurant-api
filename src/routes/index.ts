import { Router } from 'express';

import { tablesSessionsRoutes } from './tables-sessions-routes';
import { productsRoute } from './products-routes';
import { tablesRoutes } from './tables-routes';
import { ordersRoutes } from './orders-routes';

const routes = Router();
routes.use('/tables-sessions', tablesSessionsRoutes);
routes.use('/products', productsRoute);
routes.use('/tables', tablesRoutes);
routes.use('/orders', ordersRoutes);

export { routes };
