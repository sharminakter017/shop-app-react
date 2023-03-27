//get all product brands

import Brand from "../models/Brand.js"

export const getAllProductBrand = async(req,res,next) => {

    try {

        const brands = await Brand.find()

        res.status(200).json({
            brands,
            message  : "Brands successfull 💯"
        })
        
    } catch (error) {
        next(error)
        
    }

}

export const createBrand = async(req,res , next) => {
    try {

        const {name,slug} = req.body
        const brand = await Brand.create({
            name,
            slug,
            photo : req.file.filename
        });
        res.status(200).json({
            brand,
            message : 'Brands added successfull :balloon:'
        })


        
    } catch (error) {
        next(error)
        
    }
}


export const getSingleBrand = async(req,res , next) => {
    try {

        const {id} = req.params;
        const brand = await Brand.findById(id);
        res.status(200).json({
            brand,
            message : 'Single Brand successfull 🥇'
        })


        
    } catch (error) {
        next(error)
        
    }
}

//delete brands

export const deleteBrand = async(req,res , next) => {
    try {

        const {id} = req.params;
        const brand = await Brand.findByIdAndDelete(id);
        res.status(200).json({
            brand,
            message : 'Brand delete successfull 💯'
        })


        
    } catch (error) {
        next(error)
        
    }
}
 //updateBrand

 
export const updateBrand = async(req,res , next) => {
    try {
        
        const {name,slug} = req.body;
        const {id} = req.params;
        const brand = await Brand.findByIdAndUpdate(id,{
            name,
            slug
        }, {new : true});
        res.status(200).json({
            brand,
            message : 'Brand update successfull 💯'
        })


        
    } catch (error) {
        next(error)
        
    }
}