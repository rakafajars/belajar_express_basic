import { model, Schema } from "mongoose";


const bookSchema = new Schema({
    title: String,
    authorName: String,
});


export const Book = model("Book", bookSchema);