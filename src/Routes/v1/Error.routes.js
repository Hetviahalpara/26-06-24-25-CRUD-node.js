const express = require("express");
const { error_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/error-name",

  error_Controller.error_create_c
);

router.get(
  '/error-name-get',
  error_Controller.error_get_c
)

router.delete('/error-name-delete/:id',
  //cb controller
  error_Controller.error_delete_c
)

router.put('/error-update/:id',
  //cb contro
  error_Controller.error_update_c
)
module.exports = router;
