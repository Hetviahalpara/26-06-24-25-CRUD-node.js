const { Abc } = require("../Models")

const abc_create_s=(data)=>{
    return Abc.create(data)
}

const abc_get_s=()=>{
    return Abc.find()
}

const abc_delete_s=(id)=>{
    return Abc.findByIdAndDelete(id)
}

const abc_update_s=(id,data)=>{
    return Abc.findByIdAndUpdate(id,data)
}

module.exports={
    abc_create_s,
    abc_get_s,
    abc_delete_s,
    abc_update_s
}