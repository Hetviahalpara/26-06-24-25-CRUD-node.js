const express = require("express");
const { disk_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/disk-name",
  // cb controller
  disk_Controller.disk_create_c
);

router.get(
  '/disk-name-get',
  disk_Controller.disk_get_c
)

router.delete('/disk-name-delete/:id',
  //cb controller
  disk_Controller.disk_delete_c
)

router.put('/disk-update/:id',
  //cb contro
  disk_Controller.disk_update_c
)
module.exports = router;
