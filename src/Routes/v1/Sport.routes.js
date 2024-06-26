const express = require("express");
const { sport_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/sport-name",
  // cb controller
  sport_Controller.sport_create_c
);

router.get(
  '/sport-name-get',
  sport_Controller.sport_get_c
)

router.delete('/sport-name-delete/:id',
  //cb controller
  sport_Controller.sport_delete_c
)

router.put('/sport-update/:id',
  //cb contro
  sport_Controller.sport_update_c
)
module.exports = router;
