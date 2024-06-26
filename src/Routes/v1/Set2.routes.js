const express = require("express");
const { set2_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/set2-name",
  set2_Controller.set2_create_c
);

router.get(
  '/set2-name-get',
  set2_Controller.set2_get_c
)

router.delete('/set2-name-delete/:id',
  set2_Controller.set2_delete_c
)

router.put('/set2-update/:id',
  set2_Controller.set2_update_c
)
module.exports = router;
