import express from 'express';
import router from './router/router.js'
import mongoose from 'mongoose';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express(); 
const port = 1011;

app.use(cors());
app.use(express.json())

app.use("/", router);

mongoose.connect("mongodb+srv://christin:ouHLMYZXHEP6B58i@cluster0.golc87t.mongodb.net/youtube-db")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB:", error);
    });

app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 

app.listen(port, () => {
    console.log("Server started on port", port);
});

