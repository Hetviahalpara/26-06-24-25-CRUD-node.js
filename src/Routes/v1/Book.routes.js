const express = require("express");
const { book_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/book-name",
  // cb controller
  book_Controller.book_create_c
);

router.get(
  '/book-name-get',
  book_Controller.book_get_c
)

router.delete('/book-name-delete/:id',
  //cb controller
  book_Controller.book_delete_c
)

router.put('/book-update/:id',
  //cb contro
  book_Controller.book_update_c
)
module.exports = router;
