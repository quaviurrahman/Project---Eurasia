import suppliers from "../models/suppliers.js"

export const createSupplier = async ( req, res ) => {
    try{
        const newSupplier = new suppliers({
            ...req.body,
            createdDate: Date(),
        })
        await newSupplier.save()
        res.json({
            status :200,
            response: "Successfull",
            message: "Supplier created successfully!",
            supplier: newSupplier
        })
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

export const updateSupplier = async ( req, res ) => {

}