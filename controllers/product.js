import products from "../models/products.js"
import mongoose from "mongoose";
import productUnits from "../models/productUnitType.js"

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



export const queryProduct = async (req, res) => {
    try {
        const { productShortCode, productID, productLabelName, productDescription, productStatus } = req.body;

        // Fetch all products from the database
        const allProducts = await products.find();

        // Filter products based on the provided criteria
        const filteredProducts = allProducts.filter(product => {
            let isMatch = true;
            if (productShortCode && productShortCode.length !== 0) {
                const regex1 = new RegExp(productShortCode, "i");
                isMatch = isMatch && regex1.test(product.productShortCode);
            }
            if (productID && productID.length !== 0) {
                if (mongoose.Types.ObjectId.isValid(productID)) {
                    isMatch = isMatch && product._id.equals(new mongoose.Types.ObjectId(productID));
                } else {
                    isMatch = false;
                }
            }
            if (productLabelName && productLabelName.length !== 0) {
                const regex2 = new RegExp(productLabelName, "i");
                isMatch = isMatch && regex2.test(product.productLabelName);
            }
            if (productDescription && productDescription.length !== 0) {
                const regex3 = new RegExp(productDescription, "i");
                isMatch = isMatch && regex3.test(product.productDescription);
            }
            if (productStatus && productStatus.length !== 0) {
                isMatch = isMatch && product.productStatus === productStatus;
            }
            return isMatch;
        });

        if (filteredProducts.length === 0) {
            return res.status(404).json({ error: 'No products found' });
        }

        res.json(filteredProducts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};



export const activateProduct = async (req, res) => {
    try {
        const product = await products.findById(req.params.productID)
        const productStatus = product.productStatus

        if (productStatus == "inactive")
            {
                const updatedProduct = await products.findByIdAndUpdate(req.params.productID, { productStatus: "active"},{new : true})
                res.status(200).json({success: "Product has been activated successfully"})
            } 
            else {res.json({error: "Product is already activated!"})}
            
            }catch (err) {
                res.status(400).json({error: err.message})
        
    }}



    export const deactivateProduct = async (req, res) => {
    try {
        const product = await products.findById(req.params.productID)
        const productStatus = product.productStatus

        if (productStatus == "active")
            {
                const updatedProduct = await products.findByIdAndUpdate(req.params.productID, { productStatus: "inactive"},{new : true})
                res.status(200).json({success: "Product has been deactivated successfully"})
            } 
            else {res.json({error: "Product is already deactivated!"})}
            
            }catch (err) {
                res.status(400).json({error: err.message})
        
    }}

///////  Product Unit Type CREATE, UPDATE, ACTIVATE, DEACTIVATE, QUERY

export const createProductUnit = async (req, res) => {
    try {
        const reqProductUnitTypeName = req.body.productUnitTypeName
        const newProductUnit = new productUnits({
            productUnitTypeName: reqProductUnitTypeName,
            createdDate: Date(), 
         })
        await newProductUnit.save()
        res.json({
            status: 200,
            response: "Successful",
            message: "Product Unit Type Created Successfully",
            productUnitType: newProductUnit
        })} catch (err) {
            res.status(400).json({ error: err.message });
        }        
    }