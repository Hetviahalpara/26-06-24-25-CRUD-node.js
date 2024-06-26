const { Account } = require("../Models");

const account_create_s = (data) => {
  return Account.create(data);
};

const account_get_s = () => {
  return Account.find();
};

const account_delete_s=(id)=>{
    return Account.findByIdAndDelete(id)
}

const account_update_s=(id,data)=>{
    return Account.findByIdAndUpdate(id,data)
}
module.exports = {
  account_create_s,
  account_get_s,
  account_delete_s,
  account_update_s
};
