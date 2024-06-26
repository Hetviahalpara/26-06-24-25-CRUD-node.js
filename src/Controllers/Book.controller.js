const { book_Service } = require("../Services");

const book_create_c = async (req, res) => {
  try {
    const data = req.body;

    const new_data = await book_Service.book_create_s(data);

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

const book_get_c = async (req, res) => {
  try {
    const get_data = await book_Service.book_get_s();

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

const book_delete_c = async (req, res) => {
  try {
    const id = req.params.id;
    const delete_data = await book_Service.book_delete_s(id);

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

const book_update_c = async (req, res) => {
  try {

    const data=req.body

    const id=req.params.id

    const update_data = await book_Service.book_update_s(id, data);
  
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
  book_create_c,
  book_get_c,
  book_delete_c,
  book_update_c,
};
