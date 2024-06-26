const express = require("express");
const { horror_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/horror-name",
  // cb controller
  horror_Controller.horror_create_c
);

router.get(
  '/horror-name-get',
  horror_Controller.horror_get_c
)

router.delete('/horror-name-delete/:id',
  //cb controller
  horror_Controller.horror_delete_c
)

router.put('/horror-update/:id',
  //cb contro
  horror_Controller.horror_update_c
)
module.exports = router;
