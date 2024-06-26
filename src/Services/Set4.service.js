const { Set4 } = require("../Models")

const set4_create_s=(data)=>{
    return Set4.create(data)
}

const set4_get_s=()=>{
    return Set4.find()
}

const set4_delete_s=(id)=>{
    return Set4.findByIdAndDelete(id)
}

const set4_update_s=(id,data)=>{
    return Set4.findByIdAndUpdate(id,data)
}

module.exports={
    set4_create_s,
    set4_get_s,
    set4_delete_s,
    set4_update_s
}