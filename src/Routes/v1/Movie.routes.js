const express = require("express");
const { movie_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/movie-name",
  // cb controller
  movie_Controller.movie_create_c
);

router.get(
  '/movie-name-get',
  movie_Controller.movie_get_c
)

router.delete('/movie-name-delete/:id',
  //cb controller
  movie_Controller.movie_delete_c
)

router.put('/movie-update/:id',
  //cb contro
  movie_Controller.movie_update_c
)
module.exports = router;
