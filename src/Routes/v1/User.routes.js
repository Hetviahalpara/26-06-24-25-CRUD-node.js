const express = require("express");
const { user_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/user-name",
  // cb controller
  user_Controller.user_create_c
);

router.get(
  '/user-name-get',
  user_Controller.user_get_c
)

router.delete('/user-name-delete/:id',
  //cb controller
  user_Controller.user_delete_c
)

router.put('/user-update/:id',
  //cb contro
  user_Controller.user_update_c
)
module.exports = router;
