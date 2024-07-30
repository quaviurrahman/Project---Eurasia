import express from "express"
import {
    readScaleWeight,
} from "../controllers/peripheralDeviceIntegrations.js"

const router = express.Router()

router.post("/readscaleweight",readScaleWeight)

export default router