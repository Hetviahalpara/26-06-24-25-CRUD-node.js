const express = require("express");
const { xyz_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/xyz-name",
  // cb controller
  xyz_Controller.  _create_c
);

router.get(
  '/xyz-name-get',
  xyz_Controller.xyz_get_c
)

router.delete('/xyz-name-delete/:id',
  //cb controller
  xyz_Controller.xyz_delete_c
)

router.put('/xyz-update/:id',
  //cb contro
  xyz_Controller.xyz_update_c
)
module.exports = router;
