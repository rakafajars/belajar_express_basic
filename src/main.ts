import express from "express";
import { productRouter } from "./routes/product.routes";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { bookRouter } from "./routes/book_route";


// to read .env value
dotenv.config();
mongoose.connect(
    process.env.MONGO_URI as string
).then(() => { 
    console.log('Konek Berhasil')
}).catch((e) => {
    console.log(`Koneksi Gagal ${e}`)
 },);

const app = express();

// untuk bisa digunakan jsonnya
app.use(express.json());

app.use("/products", productRouter);
app.use("/books", bookRouter);

app.listen(8000);