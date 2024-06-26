const { Blog } = require("../Models")

const blog_create_s=(data)=>{
    return Blog.create(data)
}

const blog_get_s=()=>{
    return Blog.find()
}

const blog_delete_s=(id)=>{
    return Blog.findByIdAndDelete(id)
}

const blog_update_s=(id,data)=>{
    return Blog.findByIdAndUpdate(id,data)
}

module.exports={
    blog_create_s,
    blog_get_s,
    blog_delete_s,
    blog_update_s
}