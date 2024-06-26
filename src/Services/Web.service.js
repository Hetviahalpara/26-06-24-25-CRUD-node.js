const { Web } = require("../Models")

const web_create_s=(data)=>{
    return Web.create(data)
}

const web_get_s=()=>{
    return Web.find()
}

const web_delete_s=(id)=>{
    return Web.findByIdAndDelete(id)
}

const web_update_s=(id,data)=>{
    return Web.findByIdAndUpdate(id,data)
}

module.exports={
    web_create_s,
    web_get_s,
    web_delete_s,
    web_update_s
}