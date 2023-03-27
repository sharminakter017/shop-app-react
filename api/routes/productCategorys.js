import express from "express";
import { createAllCategory, getAllProductCategory, singleProductCategory,deleteProductCategory, updateProductCategory } from "../controllers/productCategoryController.js";
import { productCategoryMulter } from "../utils/multer.js";

//create router
const router = express.Router();

//routing
router.get('/category', getAllProductCategory)
router.post('/category',productCategoryMulter, createAllCategory)
router.get('/category/:slug', singleProductCategory)
router.delete('/category/:id', deleteProductCategory)
router.put('/category/:id', updateProductCategory)




//exporting
export default router;