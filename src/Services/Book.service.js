const { Book } = require("../Models")

const book_create_s=(data)=>{
    return Book.create(data)
}

const book_get_s=()=>{
    return Book.find()
}

const book_delete_s=(id)=>{
    return Book.findByIdAndDelete(id)
}

const book_update_s=(id,data)=>{
    return Book.findByIdAndUpdate(id,data)
}

module.exports={
    book_create_s,
    book_get_s,
    book_delete_s,
    book_update_s
}