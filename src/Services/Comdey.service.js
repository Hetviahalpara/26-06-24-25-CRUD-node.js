const { Comdey } = require("../Models")

const comdey_create_s=(data)=>{
    return Comdey.create(data)
}

const comdey_get_s=()=>{
    return Comdey.find()
}

const comdey_delete_s=(id)=>{
    return Comdey.findByIdAndDelete(id)
}

const comdey_update_s=(id,data)=>{
    return Comdey.findByIdAndUpdate(id,data)
}

module.exports={
    comdey_create_s,
    comdey_get_s,
    comdey_delete_s,
    comdey_update_s
}