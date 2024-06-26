const express =require('express')
const { admin_Controller } = require('../../Controllers')

const router=express.Router()

router.post('/admin-name',
   
    admin_Controller.admin_create_c
)

router.get('/admin-get',
   
    admin_Controller.admin_get_c
)

router.delete('/admin-delete/:id',
    admin_Controller.admin_delete_c
)

router.put('/admin-update/:id',
    admin_Controller.admin_update_c
)

module.exports=router