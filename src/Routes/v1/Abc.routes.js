const express = require("express");
const { abc_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/abc-name",
  // cb controller
  abc_Controller.abc_create_c
);

router.get(
  '/abc-name-get',
  abc_Controller.abc_get_c
)

router.delete('/abc-name-delete/:id',
  //cb controller
  abc_Controller.abc_delete_c
)

router.put('/abc-update/:id',
  //cb contro
  abc_Controller.abc_update_c
)
module.exports = router;
