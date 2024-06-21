import express from "express"
import {
    createProduct,
    getAllProduct,
    getProductByShortCode,
} from "../controllers/product.js"

const router = express.Router()

router.post("/create",createProduct)
router.get("/getallproduct",getAllProduct)
router.get("/getproductbyshortcode",getProductByShortCode)


export default router