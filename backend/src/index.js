import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './App.js';

dotenv.config({path: '../.env'});


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("Database connection error:", error);
})















// import express from "express"

// const app = express()

// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("Error", (error) => {
//             console.log("error", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`app is listening on ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR", error);
//         throw error;
//     }
// })()