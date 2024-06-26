import products from "../models/products.js"
import mongoose from "mongoose";
import productUnits from "../models/productUnitType.js"
import productPriceType from "../models/productPriceTypes.js"
import productPrices from "../models/productPrices.js"
import changeLogs from "../models/changeLogs.js"

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
        const newProductUnit = new productUnits({
            ...req.body,
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

export const getAllProductUnitType = async (req, res) => {
    try {
        const productUnitTypes = await productUnits.find()
        res.json(productUnitTypes)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

///////  Product Price Type CREATE, UPDATE, ACTIVATE, DEACTIVATE, QUERY

export const createProductPriceType = async (req, res) => {
    try {
        const reqProductPriceType = req.body.productPriceTypeName
        const newProductPriceType = new productPriceType({
            productPriceTypeName: reqProductPriceType,
            createdDate: Date(), 
         })
        await newProductPriceType.save()
        res.json({
            status: 200,
            response: "Successful",
            message: "Product Price Type Created Successfully",
            productPriceType: newProductPriceType
        })} catch (err) {
            res.status(400).json({ error: err.message });
        }        
    }

export const getAllProductPriceType = async (req, res) => {
    try {
        const productPriceTypes = await productPriceType.find()
        res.json(productPriceTypes)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

///////  Product Prices CREATE, UPDATE, QUERY

export const createProductPrices = async (req, res) => {
    try {
        const reqProductID = req.body.productID
        const reqPriceType = req.body.productPriceType
        const reqProductPrice = req.body.productPrice

        const newProductPrice = new productPrices({
            ...req.body,
            createdDate: Date()
        })
        const newChangeLog = new changeLogs({
            ID: reqPriceType,
            IDtype: "ProductType",
            prevValue: 0,
            newValue: reqProductPrice,
            eventLogDesc: "New Price has been set!"
        })
        await newProductPrice.save()
        await newChangeLog.save()
        res.json({
            status: 200,
            response: "Successful",
            message: "Price of the product price type was Created Successfully",
            productPrice: newProductPrice,
            createdDate: Date()
        })
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

export const getAllProductPrice = async (req, res) => {
    try {
        const allProductPrices = await productPrices.find()
        res.json(allProductPrices)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export const updateProductPrice = async (req, res) => {
    try {
        const reqProductID = req.body.productID
        const reqPriceType = req.body.productPriceType
        const reqProductPrice = req.body.productPrice
        const filter = { productID: reqProductID, productPriceType: reqPriceType}
        const prevValue = await productPrices.findOne(filter)

        const newChangeLog = new changeLogs({
            ID: reqPriceType,
            IDtype: "ProductType",
            prevValue: prevValue.productPrice,
            newValue: reqProductPrice,
            eventLogDesc: "Price has been updated!"
        })
        
        const updatedProductPrice = await productPrices.findOneAndUpdate(filter, {productPrice: reqProductPrice}, {new: true})
        await newChangeLog.save()
        res.status(200).json({success: "Product price has been updated successfully"})
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}