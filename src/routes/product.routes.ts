import express from "express"


export const productRouter = express.Router();



const products = [
    { id: 1, name: "Book 1", price: 5000 },
    { id: 1, name: "Book 2", price: 5000 }

];


productRouter.get("/", (_, res) => {
    // kasih response code
    return res.status(200).json(
        {
            message: "Ini Adalah route products, GET",
            data: products,
        }
    );
});

productRouter.get("/:id", (req, res) => {
    const id = req.params.id;

    return res.status(200).json({
        message: `Ini Detail Products ${id}`,
        data: { id: 1, name: "Book 1", price: 5000, },
    },)
});



