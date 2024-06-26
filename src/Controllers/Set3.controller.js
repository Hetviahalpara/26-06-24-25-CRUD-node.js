const { set3_Service } = require("../Services");

const set3_create_c = async (req, res) => {
  try {
    const data = req.body;

    const new_data = await set3_Service.set3_create_s(data);

    if (!new_data) {
      throw new Error("something went wrong.....");
    }

    res.status(200).json({
      success: true,
      data: new_data,
      message: "data is createdd successfullyyyyy",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const set3_get_c = async (req, res) => {
  try {
    const get_data = await set3_Service.set3_get_s();

    res.status(200).json({
      success: true,
      message: "data is gettt",
      data: get_data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const set3_delete_c = async (req, res) => {
  try {
    const id = req.params.id;
    const delete_data = await set3_Service.set3_delete_s(id);

    if (!delete_data) {
      throw new Error("data is not deleteddd");
    }

    res.status(200).json({
      success: true,
      message: "data is deleteddd",
      id: id,
      data: delete_data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "errorr",
      data: error.message,
    });
  }
};

const set3_update_c = async (req, res) => {
  try {

    const data=req.body

    const id=req.params.id

    const update_data = await set3_Service.set3_update_s(id, data);
  
    if(!update_data){
        throw new Error('data is not updateee')
  }

    res.status(200).json({
        success:true,
        message:"data is upteddddd",
        data
    })

} catch (error) {
    res.status(400).json({
        success:false,
        message:"data is not updte.."
    })
}
};

module.exports = {
  set3_create_c,
  set3_get_c,
  set3_delete_c,
  set3_update_c,
};
