const { admin_Service } = require("../Services");

const admin_create_c = async (req, res) => {
  try {
    const data = req.body;

    const new_data = await admin_Service.admin_create_s(data);

    if (!new_data) {
      throw new Error("data not found..");
    }

    res.status(200).json({
      success: true,
      message: new_data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "data not foundd",
    });
  }
};

const admin_get_c = async (req, res) => {
  try {
    const get_data = await admin_Service.admin_get_s()

    if (!get_data) {
      throw new Error("not foundd");
    }

    res.status(200).json({
      success: true,
      message: "data is succesfullyy",
      data: get_data,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "data is not get",
    });
  }
};


const admin_delete_c=async(req,res)=>{
    try {
        const id=req.params.id
        
        const delete_data=await admin_Service.admin_delete_s(id)

        res.status(200).json({
            success:true,
            message:'data is update',
            id:id,
            data:delete_data
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:'data is not update'
        })
    }
}

const admin_update_c=async(req,res)=>{
    try {
        const data=req.body
        const id=req.params.id

        const update_data=await admin_Service.admin_update_s(id,data)

        res.status(200).json({
            success:true,
            message:data
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:'data is not update'
        })        
    }
}

module.exports = {
  admin_create_c,
  admin_get_c,
  admin_delete_c,
  admin_update_c
};
