const express = require("express");
const { disney_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/disney-name",
  // cb controller
  disney_Controller.disney_create_c
);

router.get(
  '/disney-name-get',
  disney_Controller.disney_get_c
)

router.delete('/disney-name-delete/:id',
  //cb controller
  disney_Controller.disney_delete_c
)

router.put('/disney-update/:id',
  //cb contro
  disney_Controller.disney_update_c
)
module.exports = router;
