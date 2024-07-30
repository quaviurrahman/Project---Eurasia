import suppliers from "../models/suppliers.js"
import products from "../models/products.js"
import productPriceTypes from "../models/productPriceTypes.js"
import productUnitTypes from "../models/productUnitType.js"
import purchaseOrders from "../models/purchaseOrders.js"
import mongoose from "mongoose";

export const createPurchaseOrder = async (req, res) => {
    try {

        const products = req.body.products
        let totalOrderAmount = 0
        let updatedProducts = await Promise.all(products.map(async product => {
            const totalPrice = product.quantity * product.unitPrice
            totalOrderAmount += totalPrice
            return {
                ...product,
                totalPrice: totalPrice,
                totalOrderAmount
            }
        }))
        const newPurchaseOrder = new purchaseOrders({
            ...req.body,
            status: "draft",
            totalOrderAmount: totalOrderAmount,
            numberOfProducts: updatedProducts.length,
            products: updatedProducts,
            createdDate: Date(),
        })
        await newPurchaseOrder.save()
        res.json({
            status: 200,
            response: "Successful",
            message: "Purchase Order Created Successfully",
            purchaseOrder: newPurchaseOrder
        })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export const updatePurchaseOrder = async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export const queryPurchaseOrder = async (req, res) => {
    try {
        const purchaseOrderID = req.body.purchaseOrderID
        const status = req.body.status
        const supplierID = req.body.supplierID
        const allPurchaseOrders = await purchaseOrders.find()
        const filteredPurchaseOrders = allPurchaseOrders.filter(order => {
            let isMatch = true;
            if (purchaseOrderID && purchaseOrderID.length !== 0) {
                if (purchaseOrderID && mongoose.Types.ObjectId.isValid(purchaseOrderID)) {
                    isMatch = order._id.equals(new mongoose.Types.ObjectId(purchaseOrderID));
                }
                else {
                    isMatch = false
                }
            }
            if (status && status.length !== 0) {
                isMatch  = isMatch && order.status === status
            }
            if (supplierID && supplierID.length !==0) {
                isMatch = isMatch && order.supplierID == supplierID
            }
            else {
                isMatch = false
            }
            return isMatch;
        })
        if (filteredPurchaseOrders.length === 0) {
            return res.status(404).json({ error: 'No purchase orders found' });
        }

        res.json(filteredPurchaseOrders);

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}