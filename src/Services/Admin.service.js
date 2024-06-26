const { Admin } = require("../Models");

const admin_create_s = (data) => {
  return Admin.create(data);
};

const admin_get_s = () => {
  return Admin.find();
};

const admin_delete_s=(id)=>{
    return Admin.findByIdAndDelete(id)
}

const admin_update_s=(id,data)=>{
    return Admin.findByIdAndUpdate(id,data)
}
module.exports = {
  admin_create_s,
  admin_get_s,
  admin_delete_s,
  admin_update_s
};
