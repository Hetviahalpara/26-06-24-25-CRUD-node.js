const express = require("express");
const { image_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/image-name",
  // cb controller
  image_Controller.image_create_c
);

router.get(
  '/image-name-get',
  image_Controller.image_get_c
)

router.delete('/image-name-delete/:id',
  //cb controller
  image_Controller.image_delete_c
)

router.put('/image-update/:id',
  //cb contro
  image_Controller.image_update_c
)
module.exports = router;
