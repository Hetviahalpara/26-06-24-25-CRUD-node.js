const { image_Service } = require("../Services");

const image_create_c = async (req, res) => {
  try {
    const data = req.body;

    const new_data = await image_Service.image_create_s(data);

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

const image_get_c = async (req, res) => {
  try {
    const get_data = await image_Service.image_get_s();

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

const image_delete_c = async (req, res) => {
  try {
    const id = req.params.id;
    const delete_data = await image_Service.image_delete_s(id);

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

const image_update_c = async (req, res) => {
  try {

    const data=req.body

    const id=req.params.id

    const update_data = await image_Service.image_update_s(id, data);
  
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
  image_create_c,
  image_get_c,
  image_delete_c,
  image_update_c,
};
