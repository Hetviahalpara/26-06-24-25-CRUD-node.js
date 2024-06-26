const { Set1 } = require("../Models")

const set1_create_s=(data)=>{
    return Set1.create(data)
}

const set1_get_s=()=>{
    return Set1.find()
}

const set1_delete_s=(id)=>{
    return Set1.findByIdAndDelete(id)
}

const set1_update_s=(id,data)=>{
    return Set1.findByIdAndUpdate(id,data)
}

module.exports={
    set1_create_s,
    set1_get_s,
    set1_delete_s,
    set1_update_s
}