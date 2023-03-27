import mongoose from "mongoose"


//create mongodb connection 
export const mongodbConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log('Mongodb connection successfull'.bgBlue.black);
        
    } catch (error) {
        console.log(`${error.message}`.bgRed.black);
        
    }

}