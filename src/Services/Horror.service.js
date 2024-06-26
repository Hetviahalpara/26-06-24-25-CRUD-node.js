const { Horror } = require("../Models")

const horror_create_s=(data)=>{
    return Horror.create(data)
}

const horror_get_s=()=>{
    return Horror.find()
}

const horror_delete_s=(id)=>{
    return Horror.findByIdAndDelete(id)
}

const horror_update_s=(id,data)=>{
    return Horror.findByIdAndUpdate(id,data)
}

module.exports={
    horror_create_s,
    horror_get_s,
    horror_delete_s,
    horror_update_s
}