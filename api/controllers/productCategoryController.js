import Category from "../models/category.js"
import { createError } from "../utils/createError.js";


export const getAllProductCategory = async(req,res) => {


   try {
    const alldata = await Category.find();
    res.status(200).json({
        categories : alldata,
        message : 'done'
    })
    
   } catch (error) {
    console.log(error);
    
   }
    
}

export const createAllCategory = async(req,res,next) => {
    try {
        const {name,slug} = req.body
        const alldata = await Category.create({
            name,slug,photo : req.file.filename
        });
        res.status(200).json({
            categories : alldata,
            message : 'Category added successfull'
        })
        
       } catch (error) {
        next(createError('Data can not save',400))
        
       }

}


export const singleProductCategory = async(req,res) => {
    try {
        const {slug} = req.params;
        const alldata = await Category.findOne({
           slug
        });
        res.status(200).json({
            categories : alldata,
            message : 'single category success'
        })
        
       } catch (error) {
        console.log(error.message);
        
       }

}


export const deleteProductCategory = async(req,res) => {
    try {
        const {id} = req.params;
        const alldata = await Category.findByIdAndDelete(id);
        res.status(200).json({
          
            message : 'category delete successfull'
        })
        
       } catch (error) {
        console.log(error.message);
        
       }

}


export const updateProductCategory = async(req,res) => {
    try {
        const {id} = req.params;
        const {name,slug} = req.body;
        const alldata = await Category.findByIdAndUpdate(id, {
            name,
            slug
        },{new : true});
        res.status(200).json({
            category : alldata,
          
            message : 'Category updated successfull'
        })
        
       } catch (error) {
        console.log(error.message);
        
       }

}





