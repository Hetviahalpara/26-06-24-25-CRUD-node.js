const { Set3 } = require("../Models")

const set3_create_s=(data)=>{
    return Set3.create(data)
}

const set3_get_s=()=>{
    return Set3.find()
}

const set3_delete_s=(id)=>{
    return Set3.findByIdAndDelete(id)
}

const set3_update_s=(id,data)=>{
    return Set3.findByIdAndUpdate(id,data)
}

module.exports={
    set3_create_s,
    set3_get_s,
    set3_delete_s,
    set3_update_s
}