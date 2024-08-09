import express from "express"
import {
    createSupplier,
    createSupplierProduct

} from "../controllers/suppliers.js"

const router = express.Router()

router.post("/createsupplier",createSupplier)
router.post("/createSupplierProduct",createSupplierProduct)

export default router