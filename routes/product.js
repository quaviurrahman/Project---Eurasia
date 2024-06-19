import express from "express"
import {
    createProduct,
    editProduct,
    queryProduct,
    deleteProduct,
    activateProduct,
    deactivateProduct,
} from "../controllers/product.js"

const router = express.Router()

router.post("/create",createProduct)
router.put("/delete/:id",editProduct)
router.put("/query/:id",queryProduct)
router.put("/activate/:id",deleteProduct)
router.put("/deactivate/:id",activateProduct)
router.post("/delete",deactivateProduct)


export default router