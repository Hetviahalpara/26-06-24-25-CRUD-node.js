const { Error } = require("../Models")

const error_create_s=(data)=>{
    return Error.create(data)
}

const error_get_s=()=>{
    return Error.find()
}

const error_delete_s=(id)=>{
    return Error.findByIdAndDelete(id)
}

const error_update_s=(id,data)=>{
    return Error.findByIdAndUpdate(id,data)
}

module.exports={
    error_create_s,
    error_get_s,
    error_delete_s,
    error_update_s
}