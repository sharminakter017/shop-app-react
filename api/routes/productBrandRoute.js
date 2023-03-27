import express from "express";
import { getAllProductBrand,createBrand, getSingleBrand, deleteBrand,updateBrand } from "../controllers/productBrands.js";
import { productBrandMulter } from "../utils/multer.js";



//create router
const router = express.Router();

//routing
router.get('/brand', getAllProductBrand)
router.post('/brand',productBrandMulter, createBrand)
router.get('/brand/:id', getSingleBrand)
router.delete('/brand/:id', deleteBrand)
router.put('/brand/:id', updateBrand)





//exporting
export default router;