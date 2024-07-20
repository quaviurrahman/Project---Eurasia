import suppliers from "../models/suppliers.js"
import products from "../models/products.js"
import productPriceTypes from "../models/productPriceTypes.js"
import productUnitTypes from "../models/productUnitType.js"
import purchaseOrders from "../models/purchaseOrders.js"

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
}catch (err) {
    res.status(400).json({error: err.message})
}
}

// export const calculatePrice