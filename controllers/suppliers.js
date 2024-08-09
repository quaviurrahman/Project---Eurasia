import suppliers from "../models/suppliers.js"
import supplierProducts from "../models/supplierProducts.js"

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

export const createSupplierProduct = async ( req,res ) => {
    try {
const newSupplierProduct = new supplierProducts ({
    ...req.body,
    createdDate: Date ()
})
await newSupplierProduct.save()
res.json({
    status:200,
    response:"Successfull",
    message:"Sucessfully created new Supplier Specific Product!",
    supplierProduct: newSupplierProduct
})
    } catch (err) {
        res.status(400).sjon({ error: err.message })
    }
}