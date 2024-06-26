const { Disney } = require("../Models")

const disney_create_s=(data)=>{
    return Disney.create(data)
}

const disney_get_s=()=>{
    return Disney.find()
}

const disney_delete_s=(id)=>{
    return Disney.findByIdAndDelete(id)
}

const disney_update_s=(id,data)=>{
    return Disney.findByIdAndUpdate(id,data)
}

module.exports={
    disney_create_s,
    disney_get_s,
    disney_delete_s,
    disney_update_s
}