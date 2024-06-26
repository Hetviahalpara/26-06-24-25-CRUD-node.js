const { Movie } = require("../Models")

const movie_create_s=(data)=>{
    return Movie.create(data)
}

const movie_get_s=()=>{
    return Movie.find()
}

const movie_delete_s=(id)=>{
    return Movie.findByIdAndDelete(id)
}

const movie_update_s=(id,data)=>{
    return Movie.findByIdAndUpdate(id,data)
}

module.exports={
    movie_create_s,
    movie_get_s,
    movie_delete_s,
    movie_update_s
}