const express = require("express");
const { docu_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/docu-name",

  docu_Controller.docu_create_c
);

router.get(
  '/docu-name-get',
  docu_Controller.docu_get_c
)

router.delete('/docu-name-delete/:id',
  //cb controller
  docu_Controller.docu_delete_c
)

router.put('/docu-update/:id',
  //cb contro
  docu_Controller.docu_update_c
)
module.exports = router;
