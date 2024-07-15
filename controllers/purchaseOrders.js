import suppliers from "../models/suppliers.js"
import products from "../models/products.js"
import productPriceTypes from "../models/productPriceTypes.js"
import productUnitTypes from "../models/productUnitType.js"
import purchaseOrders from "../models/purchaseOrders.js"

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
        purchaseOrder: newPurchaseOrder
    })
}catch (err) {
    res.status(400).json({error: err.message})
}
}

export const addPurchaseOrderProduct = async (req,res) => {
    try{
        const purchaseOrderID = req.body.purchaseOrderID
        const addedProducts = req.body.products
        const purchaseOrder = await purchaseOrders.findByIdAndUpdate(purchaseOrderID,{products: addedProducts},{new: true})
        res.json({
            status:400,
            response:"Successfull",
            message:"Order Updated successfully",
            purchaseOrder: purchaseOrder
        })

    }catch (err) {
        res.status(400).json({error: err.message})
    }
}

export const calculatePrice