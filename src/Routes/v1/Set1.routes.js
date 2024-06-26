const express = require("express");
const { set1_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/set1-name",
  set1_Controller.set1_create_c
);

router.get(
  '/set1-name-get',
  set1_Controller.set1_get_c
)

router.delete('/set1-name-delete/:id',
  set1_Controller.set1_delete_c
)

router.put('/set1-update/:id',
  set1_Controller.set1_update_c
)
module.exports = router;
