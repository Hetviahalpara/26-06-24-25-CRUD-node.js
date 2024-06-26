const express = require("express");
const { web_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/web-name",
  // cb controller
  web_Controller.web_create_c
);

router.get(
  '/web-name-get',
  web_Controller.web_get_c
)

router.delete('/web-name-delete/:id',
  //cb controller
  web_Controller.web_delete_c
)

router.put('/web-update/:id',
  //cb contro
  web_Controller.web_update_c
)
module.exports = router;
