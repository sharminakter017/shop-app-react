import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import productCategorys from "./routes/productCategorys.js"
import productBrandRoute from "./routes/productBrandRoute.js"
import productTagRoute from "./routes/productTagRoute.js"
import productRoute from "./routes/productRoute.js"
import { mongodbConnection } from "./config/db.js";
import { errorHandler } from "./middlewares/errorHandler.js";

//express
const app = express();

dotenv.config();

//environment setup
const PORT = process.env.PORT  || 9090;


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());

//set Static
app.use(express.static('api/public'));

//routes
app.use('/api/v1/product', productCategorys);
app.use('/api/v1/product', productBrandRoute);
app.use('/api/v1/product', productTagRoute);
app.use('/api/v1/product', productRoute);



app.use(errorHandler)

//Listen
app.listen(PORT,() => {
    mongodbConnection()
    console.log(`server is running port ${PORT}`.bgGreen.black);
})