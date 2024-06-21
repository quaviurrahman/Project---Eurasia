import products from "../models/products.js"
import stringify from "stringify"

export const createProduct = async (req, res) => {
try {
        const newProduct = new products({
            ...req.body,
            createdDate: Date(), 
         })
        await newProduct.save()
        res.json({
            status: 200,
            response: "Successful",
            message: "Product Created Successfully",
            product: newProduct
        })} catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

export const getAllProduct = async (req, res) => {
    try {
        const productFullList = await products.find()
        res.json(productFullList)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

export const getProductByShortCode = async (req, res) => {
    try {
        const reqProductShortCode = req.params.productShortCode
        const regex = new RegExp(reqProductShortCode, 'i')

        const filteredProductList = await products.find({ productShortCode: regex });
        if (filteredProductList.length === 0) {
            return res.status(404).json({ error: 'No products found' });
        }
        
        res.json(filteredProductList)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}
