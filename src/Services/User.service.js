const { User } = require("../Models")

const user_create_s=(data)=>{
    return User.create(data)
}

const user_get_s=()=>{
    return User.find()
}

const user_delete_s=(id)=>{
    return User.findByIdAndDelete(id)
}

const user_update_s=(id,data)=>{
    return User.findByIdAndUpdate(id,data)
}

module.exports={
    user_create_s,
    user_get_s,
    user_delete_s,
    user_update_s
}