const { Sport } = require("../Models")

const sport_create_s=(data)=>{
    return Sport.create(data)
}

const sport_get_s=()=>{
    return Sport.find()
}

const sport_delete_s=(id)=>{
    return Sport.findByIdAndDelete(id)
}

const sport_update_s=(id,data)=>{
    return Sport.findByIdAndUpdate(id,data)
}

module.exports={
    sport_create_s,
    sport_get_s,
    sport_delete_s,
    sport_update_s
}