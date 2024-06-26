const { Docu } = require("../Models")

const docu_create_s=(data)=>{
    return Docu.create(data)
}

const docu_get_s=()=>{
    return Docu.find()
}

const docu_delete_s=(id)=>{
    return Docu.findByIdAndDelete(id)
}

const docu_update_s=(id,data)=>{
    return Docu.findByIdAndUpdate(id,data)
}

module.exports={
    docu_create_s,
    docu_get_s,
    docu_delete_s,
    docu_update_s
}