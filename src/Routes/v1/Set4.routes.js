const express = require("express");
const { set4_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/set4-name",
  set4_Controller.set4_create_c
);

router.get(
  '/set4-name-get',
  set4_Controller.set4_get_c
)

router.delete('/set4-name-delete/:id',
  set4_Controller.set4_delete_c
)

router.put('/set4-update/:id',
  set4_Controller.set4_update_c
)
module.exports = router;
