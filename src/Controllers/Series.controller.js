const { series_Service } = require("../Services")

const series_create_c=async(req,res)=>{
    try {
        const data =req.body

        const new_data=await series_Service.series_create_s(data)

        if(!new_data){
            throw new Error('data not craeate')
        }
        res.status(200).json({
            success:true,
            message:new_data
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:'data not found'
        })
    }
}

const series_get_c=async(req,res)=>{
    try {
        const get_data=await series_Service.series_get_s()

        res.status(200).json({
            success:true,
            message:'data is get',
            data:get_data
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:'data not get'
        })
    }
}

const series_delete_c=async(req,res)=>{
    try {
        const id=req.params.id
        const delete_data=await series_Service.series_delete_s(id)

        res.status(200).json({
            success:true,
            message:'data is deleted',
            data:delete_data,
            id
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:'data not deleted'
        })        
    }
}

const series_update_c=async(req,res)=>{
    try {
        const data=req.body
        const id=req.params.id
        const update_data=await series_Service.series_update_s(id,data)

        res.status(200).json({
            success:true,
            message:'data is update',
            data,
            update_data

        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:'data not update'
        })        
    }
}

const check_series = async(req,res) => {
    try {
        const name = req.body.series_name
        // service <= particular data
        const result = await series_Service.check_series(name)

        if(!result){
            throw new Error("Data does not exist")
        }

        res.status(200).json({
            success:true,
            message:"Data found",
            data: result,
            name
        })


    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}


module.exports={
    series_create_c,
    series_get_c,
    series_delete_c,
    series_update_c,
    check_series
}