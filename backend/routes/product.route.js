import expess from "express";

import { createProduct, deleteProducts, getProducts, updateProduct } from "../controllers/product.controller.js";
const router = expess.Router();

router.get("/",getProducts);

router.post("/", createProduct);

router.put("/:id",updateProduct);

router.delete("/:id", deleteProducts);

export default router;