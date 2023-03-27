import express from "express";
import { getAllProduct,createProduct } from "../controllers/productController.js";


//create router
const router = express.Router();

//routing
router.get('/', getAllProduct)
router.post('/', createProduct)





//exporting
export default router;