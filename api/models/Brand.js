import mongoose from "mongoose";

//schema
const brandSchema = mongoose.Schema({
    name : {
        type : String,
        trim : true,
        unique: true,
        required : true
    },

    slug: {
        type : String,
        trim : true,
        unique: true,
        required : true

    },

    photo : {
        type : String,
        default: null,
        trim : true,
    },
    status : {
        type : Boolean,
        default: true,
    },
    trash: {
        type : Boolean,
        default: false,

    }
    
},
{
    timeStamps : true
}
)


//export 
export default mongoose.model("Brand",brandSchema)