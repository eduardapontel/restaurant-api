import { Router } from "express";
import { ProductsController } from "../controllers/products-controller";

const productsRoute = Router();
const productsController = new ProductsController();

productsRoute.get("/", productsController.index);
productsRoute.post("/", productsController.create);
productsRoute.put("/:id", productsController.update);
productsRoute.delete("/:id", productsController.remove);

export { productsRoute };