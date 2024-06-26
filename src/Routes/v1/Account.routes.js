const express =require('express')
const { account_Controller } = require('../../Controllers')

const router=express.Router()

router.post('/account-name',
   
    account_Controller.account_create_c
)

router.get('/account-get',
   
    account_Controller.account_get_c
)

router.delete('/account-delete/:id',
    account_Controller.account_delete_c
)

router.put('/account-update/:id',
    account_Controller.account_update_c
)

module.exports=router