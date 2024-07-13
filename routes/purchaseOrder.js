import express from "express"
import {
    createPurchaseOrder,
    addPurchaseOrderProduct
} from "../controllers/purchaseOrders.js"

const router = express.Router()

router.post("/createpurchaseorder",createPurchaseOrder)
router.post("/addpurchaseorderproduct",addPurchaseOrderProduct)

export default router