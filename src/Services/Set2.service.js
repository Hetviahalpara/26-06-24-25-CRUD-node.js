const { Set2 } = require("../Models")

const set2_create_s=(data)=>{
    return Set2.create(data)
}

const set2_get_s=()=>{
    return Set2.find()
}

const set2_delete_s=(id)=>{
    return Set2.findByIdAndDelete(id)
}

const set2_update_s=(id,data)=>{
    return Set2.findByIdAndUpdate(id,data)
}

module.exports={
    set2_create_s,
    set2_get_s,
    set2_delete_s,
    set2_update_s
}