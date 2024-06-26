const { Disk } = require("../Models")

const disk_create_s=(data)=>{
    return Disk.create(data)
}

const disk_get_s=()=>{
    return Disk.find()
}

const disk_delete_s=(id)=>{
    return Disk.findByIdAndDelete(id)
}

const disk_update_s=(id,data)=>{
    return Disk.findByIdAndUpdate(id,data)
}

module.exports={
    disk_create_s,
    disk_get_s,
    disk_delete_s,
    disk_update_s
}