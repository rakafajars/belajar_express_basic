import express from "express";
import { productRouter } from "./routes/product.routes";


const app = express();

// untuk bisa digunakan jsonnya
app.use(express.json());


app.use("/products", productRouter);

app.listen(8000);