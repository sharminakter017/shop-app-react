//get all tag
import Tag from "../models/Tag.js"

export const getAllProductTag = async(req,res,next) => {

    try {
        const Tags = await Tag.find();
        res.status(200).json({
            Tags,
            message : "All Tags Are Here 👍",
            
        })
        
    } catch (error) {
        next(error)
        
    }

}



//create tag
export const createTag = async(req,res,next) => {

    try {

        const {name,slug} = req.body;
        const data = await Tag.create({name,slug});
        res.status(200).json({
            Tags : data,
            message : "Tag created successfully ❤️",
            
        })
        
    } catch (error) {
        next(error)
        
    }

}

//single tag
export const singleTag = async(req,res,next) => {

    try {

        const {id} = req.params;
        const data = await Tag.findById(id);
        res.status(200).json({
            Tags : data,
            message : "Single Tag View ❤️",
            
        })
        
    } catch (error) {
        next(error)
        
    }

}

//deleteTag
export const deleteTag = async(req,res,next) => {

    try {

        const {id} = req.params;
        const data = await Tag.findByIdAndDelete(id);
        res.status(200).json({
            Tags : data,
            message : "Tag are deleted successfull❤️",
            
        })
        
    } catch (error) {
        next(error)
        
    }

}

//PUT // UPDATE
export const updateTag = async(req,res,next) => {

    try {

        const {name,slug} = req.body;
        const {id} = req.params;
        const data = await Tag.findByIdAndUpdate(id,{name,slug},{new  : true});
        res.status(200).json({
            Tags : data,
            message : "Tag are Updated successfull❤️",
            
        })
        
    } catch (error) {
        next(error)
        
    }

}
