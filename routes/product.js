import express from "express"
import {
    createProduct,
    getAllProduct,
    queryProduct,
    activateProduct,
    deactivateProduct,
    createProductUnit
} from "../controllers/product.js"

const router = express.Router()

router.post("/create",createProduct)
router.get("/getallproduct",getAllProduct)
router.get("/queryProduct",queryProduct)
router.post("/activateproduct/:productID",activateProduct)
router.post("/deactivateproduct/:productID",deactivateProduct)

router.post("/createproductunit",createProductUnit)

export default router