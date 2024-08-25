import express from "express"
import { Book } from "../models/book.schema";


export const bookRouter = express.Router();

bookRouter.get("/", async (_, res) => {
    const allBooks = await Book.find();
    return res.status(200).json({
        message: "Data Berhasil",
        data: allBooks,
    });
});

