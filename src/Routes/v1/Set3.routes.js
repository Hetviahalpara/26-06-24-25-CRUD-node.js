const express = require("express");
const { set3_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/set3-name",
  set3_Controller.set3_create_c
);

router.get(
  '/set3-name-get',
  set3_Controller.set3_get_c
)

router.delete('/set3-name-delete/:id',
  set3_Controller.set3_delete_c
)

router.put('/set3-update/:id',
  set3_Controller.set3_update_c
)
module.exports = router;
