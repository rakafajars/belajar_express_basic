import express from "express"
import { Book } from "../models/book.schema";


export const bookRouter = express.Router();

bookRouter.get("/", async (_, res) => {
    const allBooks = await Book.find().populate(
        "authorId"
    );
    return res.status(200).json({
        message: "Data Berhasil",
        data: allBooks,
    });
});



bookRouter.post("/", async (req, res) => {
    const { title, authorId } = req.body;

    // Logic to insert book into db
    const createBook = new Book({ title, authorId, });

    await createBook.save();

    return res.status(201).json({
        message: "Berhasil Membuat Buku Baru",
        data: {
            title, authorId,
        },
    })
});

// // Update parsial
// bookRouter.patch("/:id", async (req, res) => {
//     const { title, authorName } = req.body;
//     const header = req.headers.authorization;
//     const bookId = req.params.id;
//     // to update data, harus memiliki secret keynya.. contoh kondisinya
//     if (header != "raka") {
//         return res.status(401).json({
//             message: "Unauthorized"
//         });
//     }

//     await Book.findByIdAndUpdate(
//         bookId, {
//         title,
//         authorName,
//     },
//     )
//     return res.json({
//         message: "Berhasil Update Data"
//     });
// });


bookRouter.delete("/:id", async (req, res) => {
    const bookId = req.params.id;

    const deleteBook = await Book.findByIdAndDelete(bookId);
    console.log(deleteBook);
    return res.json({ message: "Delete Berhasil" })
})



// // Update Semua table atau upload sesuatu
// bookRouter.put("/:id", async (req, res) => {
//     const { title, authorName } = req.body;

//     // Logic to insert book into db
//     const createBook = new Book({ title, authorName, });

//     await createBook.save();

//     return res.json({
//         message: "Berhasil Membuat Buku Baru",
//         data: {
//             title, authorName,
//         },
//     })
// });