import express from "express";
import product from "../controller/ProductController";
import { validateResource } from "../middleware/validateResource";
import { ProductDto } from "../models/DTO/ProductDto";

const router = express.Router();


router.get('/products', product.find);
router.get('/products/:id', product.findONe)
router.get('/products/:productName', product.getTotal)
router.post('/create', validateResource(ProductDto), product.create);
router.patch('/products/:id', validateResource(ProductDto, true),product.update);
router.delete('/products/:id', product.delete);


export default router;