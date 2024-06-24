import changeLogs from "../models/changeLogs.js"

export const getAllChangeLogs = async (req, res) => {
    try {
        const getAllChangeLogs = await changeLogs.find()
        res.json(getAllChangeLogs)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}