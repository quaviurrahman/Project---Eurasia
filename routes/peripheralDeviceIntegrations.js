import express from "express"
import {
    readScaleWeight,
} from "../controllers/peripheralDeviceIntegrations.js"

const router = express.Router()

router.get("/readscaleweight",readScaleWeight)

export default router