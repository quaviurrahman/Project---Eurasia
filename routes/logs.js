import express from "express"
import {
    getAllChangeLogs
} from "../controllers/changeLogs.js"

const router = express.Router()

router.get("/getallchangelogs",getAllChangeLogs)

export default router