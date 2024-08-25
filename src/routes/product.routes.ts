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


productRouter.get("/popular", (_, res) => {
    return res.json(
        {
            message: "Ini Adalah route Popular, GET",
        }
    );
});


productRouter.get("/discounts", (_, res) => {
    return res.json(
        {
            message: "Ini Adalah route discounts, GET",
        }
    );
});




