import { model, Schema } from "mongoose";


const bookSchema = new Schema({
    title: String,
    // Relation data, similiar to foreign key
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "Author",
    }
});


export const Book = model("Book", bookSchema);



// authorSchema
const authorSchema = new Schema({
    name: String,
    country: String,
});



export const Author = model("Author", authorSchema);