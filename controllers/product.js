import products from "../models/products.js"
import productUnitTypes from "../models/productUnitType.js"
import stringify from "stringify"

///////  Product CREATE, QUERY, UPDATE, ACTIVATE, DEACTIVATE ///////

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
        const reqProductShortCode = req.body.productShortCode
        const regex = new RegExp(reqProductShortCode, "i")
        const filteredProductList = await products.find({productShortCode: regex})
        if (filteredProductList.length === 0) {
            return res.status(404).json({ error: 'No products found' });
        }
        
        res.json(filteredProductList)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

export const activateProduct = async (req, res) => {
    try {
        const product = await products.findById(req.params.productID)
        console.log(product)
        const productStatus = product.productStatus
        console.log(productStatus)

        if (productStatus == "inactive")
            {
                const updatedProduct = await products.findByIdAndUpdate(req.params.productID, { productStatus: "active"},{new : true})
                res.status(200).json({success: "Product has been activated successfully"})
            } 
            else {res.json({error: "Product is already activated!"})}
            
            }catch (err) {
                res.status(400).json({error: err.message})
        
    }}

///////  Product Unit Type CREATE, UPDATE, ACTIVATE, DEACTIVATE, QUERY
