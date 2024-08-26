import express from "express"
import { Author } from "../models/book.schema";


export const authorRouter = express.Router();

authorRouter.get("/", async (_, res) => {
    const authors = await Author.find();
    return res.status(200).json({
        message: "Data Berhasil",
        data: authors,
    });
});

authorRouter.post("/", async (req, res) => {
    const { name, country } = req.body;

    // Logic to insert book into db
    const createBook = new Author({ name, country, });

    await createBook.save();

    return res.status(201).json({
        message: "Berhasil Membuat Author Baru",
        data: {
            name, country,
        },
    })
});
