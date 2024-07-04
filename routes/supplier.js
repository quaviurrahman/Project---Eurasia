import express from "express"
import {
    createSupplier,

} from "../controllers/suppliers.js"

const router = express.Router()

router.post("/createsupplier",createSupplier)


export default router