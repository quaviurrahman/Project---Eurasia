import suppliers from "../models/suppliers.js"
import products from "../models/products.js"
import productPriceTypes from "../models/productPriceTypes.js"
import productUnitTypes from "../models/productUnitType.js"
import purchaseOrders from "../models/purchaseOrders.js"
//import purchaseProducts from "../models/purchaseProducts.js"

export const createPurchaseOrder = async (req, res) => {
try {
    const newPurchaseOrder = new purchaseOrders({
        ...req.body,
        createdDate: Date(),
    })
    await newPurchaseOrder.save()
    res.json({
        status: 200,
        response: "Successful",
        message: "Purchase Order Created Successfully",
        product: newPurchaseOrder
    })
}catch (err) {
    res.status(400).json({error: err.message})
}
}