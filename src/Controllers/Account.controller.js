const { account_Service } = require("../Services");

const account_create_c = async (req, res) => {
  try {
    const data = req.body;

    const new_data = await account_Service.account_create_s(data);

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

const account_get_c = async (req, res) => {
  try {
    const get_data = await account_Service.account_get_s()

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


const account_delete_c=async(req,res)=>{
    try {
        const id=req.params.id
        
        const delete_data=await account_Service.account_delete_s(id)

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

const account_update_c=async(req,res)=>{
    try {
        const data=req.body
        const id=req.params.id

        const update_data=await account_Service.account_update_s(id,data)

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
  account_create_c,
  account_get_c,
  account_delete_c,
  account_update_c
};
