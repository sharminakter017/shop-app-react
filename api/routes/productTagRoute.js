import express from "express";
import { getAllProductTag,createTag, singleTag,deleteTag, updateTag } from "../controllers/productTag.js";
import { productBrandMulter } from "../utils/multer.js";



//create router
const router = express.Router();

//routing
router.get('/tag', getAllProductTag);
router.post('/tag', createTag);
router.get('/tag/:id', singleTag);
router.delete('/tag/:id', deleteTag);
router.put('/tag/:id', updateTag);






//exporting
export default router;