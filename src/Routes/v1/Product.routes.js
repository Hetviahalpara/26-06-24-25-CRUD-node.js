const express = require("express");
const {  product_Controller  } = require("../../Controllers");

const router = express.Router();

router.post(
  "/product-name",
  // cb controller
   product_Controller .product_create_c
);

router.get(
  '/product-name-get',
   product_Controller .product_get_c
)

router.delete('/product-name-delete/:id',
  //cb controller
   product_Controller .product_delete_c
)

router.put('/product-update/:id',
  //cb contro
   product_Controller .product_update_c
)
module.exports = router;
