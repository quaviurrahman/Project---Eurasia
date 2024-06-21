import express from "express"
import {
    createProduct,
    getAllProduct,
    getProductByShortCode,
    activateProduct
} from "../controllers/product.js"

const router = express.Router()

router.post("/create",createProduct)
router.get("/getallproduct",getAllProduct)
router.get("/getproductbyshortcode",getProductByShortCode)
router.post("/activateproduct/:productID",activateProduct)

export default router