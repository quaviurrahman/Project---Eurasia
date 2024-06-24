import express from "express"
import {
    createProduct,
    getAllProduct,
    queryProduct,
    activateProduct,
    deactivateProduct,
    createProductUnit,
    getAllProductUnitType,
    createProductPriceType,
    getAllProductPriceType,
    createProductPrices,
    getAllProductPrice
} from "../controllers/product.js"

const router = express.Router()

router.post("/create",createProduct)
router.get("/getallproduct",getAllProduct)
router.get("/queryproduct",queryProduct)
router.post("/activateproduct/:productID",activateProduct)
router.post("/deactivateproduct/:productID",deactivateProduct)

router.post("/createproductunit",createProductUnit)
router.get("/getallproductunittype",getAllProductUnitType)

router.post("/createproductpricetype",createProductPriceType)
router.get("/getallproductpricetype",getAllProductPriceType)

router.post("/createproductprices",createProductPrices)
router.get("/getallproductprices",getAllProductPrice)

export default router