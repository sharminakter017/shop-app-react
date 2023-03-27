import { slugCreate } from "../helper/slugCreate.js";
import Product from "../models/Product.js"

//get all product
export const getAllProduct = async(req,res,next) => {
    try {
        const data = await Product.find();
        res.status(200).json({
            products : data,
            message  : "Get all product successfull"
        })
        
    } catch (error) {
        next(error)
        
    }

}

//createProduct
export const createProduct = async(req,res,next) => {
    try {
        const {name} = req.body;
        console.log(slugCreate(name));
        const data = await Product.create({name});
        
        res.status(200).json({
            products : data,
            message  : "create product successfull"
        })
        
    } catch (error) {
        next(error)
        
    }

}