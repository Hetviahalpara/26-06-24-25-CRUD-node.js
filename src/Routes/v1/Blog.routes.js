const express = require("express");
const { blog_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/blog-name",
  // cb controller
  blog_Controller.blog_create_c
);

router.get(
  '/blog-name-get',
  blog_Controller.blog_get_c
)

router.delete('/blog-name-delete/:id',
  //cb controller
  blog_Controller.blog_delete_c
)

router.put('/blog-update/:id',
  //cb contro
  blog_Controller.blog_update_c
)
module.exports = router;
