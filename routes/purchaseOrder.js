import express from "express"
import {
    createPurchaseOrder,
    queryPurchaseOrder
} from "../controllers/purchaseOrders.js"

const router = express.Router()

router.post("/createpurchaseorder",createPurchaseOrder)
router.get("/querypurchaseorder",queryPurchaseOrder)

export default router