const express = require("express");
const { event_Controller } = require("../../Controllers");

const router = express.Router();

router.post(
  "/event-name",
  // cb controller
  event_Controller.event_create_c
);

router.get(
  '/event-name-get',
  event_Controller.event_get_c
)

router.delete('/event-name-delete/:id',
  //cb controller
  event_Controller.event_delete_c
)

router.put('/event-update/:id',
  //cb contro
  event_Controller.event_update_c
)
module.exports = router;
