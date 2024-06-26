const { Xyz } = require("../Models")

const xyz_create_s=(data)=>{
    return Xyz.create(data)
}

const xyz_get_s=()=>{
    return Xyz.find()
}

const xyz_delete_s=(id)=>{
    return Xyz.findByIdAndDelete(id)
}

const xyz_update_s=(id,data)=>{
    return Xyz.findByIdAndUpdate(id,data)
}

module.exports={
    xyz_create_s,
    xyz_get_s,
    xyz_delete_s,
    xyz_update_s
}