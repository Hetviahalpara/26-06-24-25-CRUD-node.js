const { Image } = require("../Models")


const image_create_s=(data)=>{
    return Image.create(data)
}

const image_get_s=()=>{
    return Image.find()
}

const image_delete_s=(id)=>{
    return Image.findByIdAndDelete(id)
}

const image_update_s=(id,data)=>{
    return Image.findByIdAndUpdate(id,data)
}

module.exports={
    image_create_s,
    image_get_s,
    image_delete_s,
    image_update_s
}