import express from "express";
import colors from "colors";
import dotenv from "dotenv";

//express
const app = express();

dotenv.config();

//environment setup
const PORT = process.env.PORT  || 9090;

//Listen
app.listen(PORT,() => {
    console.log(`server is running port ${PORT}`.bgGreen.black);
})