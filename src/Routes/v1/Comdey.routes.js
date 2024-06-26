const express = require("express");
const { comdey_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/comdey-name",
  // cb controller
  comdey_Controller.comdey_create_c
);

router.get(
  '/comdey-name-get',
  comdey_Controller.comdey_get_c
)

router.delete('/comdey-name-delete/:id',
  //cb controller
  comdey_Controller.comdey_delete_c
)

router.put('/comdey-update/:id',
  //cb contro
  comdey_Controller.comdey_update_c
)
module.exports = router;
