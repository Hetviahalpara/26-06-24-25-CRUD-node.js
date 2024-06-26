const { Series } = require("../Models")

const series_create_s=(data)=>{
    return Series.create(data)
}
const series_get_s=()=>{
    return Series.find()
}
const series_delete_s=(id)=>{
    return Series.findByIdAndDelete(id)
}
const series_update_s=(id,data)=>{
    return Series.findByIdAndUpdate(id,data)
}


const check_series = (series_name) => {
    return Series.findOne({series_name})
}

module.exports={
    series_create_s,
    series_get_s,
    series_delete_s,
    series_update_s,
    check_series
}