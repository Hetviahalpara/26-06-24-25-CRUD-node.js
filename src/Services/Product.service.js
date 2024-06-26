const { Product } = require("../Models")

const product_create_s=(data)=>{
    return Product.create(data)
}

const product_get_s=()=>{
    return Product.find()
}

const product_delete_s=(id)=>{
    return Product.findByIdAndDelete(id)
}

const product_update_s=(id,data)=>{
    return Product.findByIdAndUpdate(id,data)
}

module.exports={
    product_create_s,
    product_get_s,
    product_delete_s,
    product_update_s
}