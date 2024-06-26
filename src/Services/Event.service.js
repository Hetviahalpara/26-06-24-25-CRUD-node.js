const { Event } = require("../Models")

const event_create_s=(data)=>{
    return Event.create(data)
}

const event_get_s=()=>{
    return Event.find()
}

const event_delete_s=(id)=>{
    return Event.findByIdAndDelete(id)
}

const event_update_s=(id,data)=>{
    return Event.findByIdAndUpdate(id,data)
}

module.exports={
    event_create_s,
    event_get_s,
    event_delete_s,
    event_update_s
}