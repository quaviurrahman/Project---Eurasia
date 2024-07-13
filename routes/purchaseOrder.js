import express from "express"
import {
    createPurchaseOrder
} from "../controllers/purchaseOrders.js"

const router = express.Router()

router.post("/createpurchaseorder",createPurchaseOrder)

export default router