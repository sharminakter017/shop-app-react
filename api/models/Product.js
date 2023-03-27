import mongoose from "mongoose";

//schema
const productSchema = mongoose.Schema({
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
        

    },
    regular_price: {
        type : Number,
      

    },
    sale_price: {
        type : Number,
      

    },
    stock: {
        type : Number,
       default : null,
      

    },

    photo : {
        type : String,
        default: null,
        trim : true,
    },
   gallery : {
        type : Array,
        default: null,
        trim : true,
    },
    short_desc : {
        type : String,
        trim : true,

    },
    long_desc : {
        type : String,
        trim : true,

    },
    categories : {
        type : [mongoose.Schema.Types.ObjectId],
        ref : "category"
    },
    tags : {
        type : [mongoose.Schema.Types.ObjectId],
        ref : "tag"
    },
   brands : {
    type : [mongoose.Schema.Types.ObjectId],
    ref : "Brand"
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
export default mongoose.model("Product",productSchema)