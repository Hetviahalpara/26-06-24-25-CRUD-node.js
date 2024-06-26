const express = require("express");
const { series_Controller } = require("../../Controllers");

const router = express.Router();

router.post("/series-name", series_Controller.series_create_c);

router.get("/series-get", series_Controller.series_get_c);

router.delete('/series-delete/:id',
    //controller
    series_Controller.series_delete_c
)
router.put('/series-update/:id',
    series_Controller.series_update_c
)

// check series ==================== 
router.post(
    "/check",
    // cb
    series_Controller.check_series
)
// check series ==================== 

module.exports = router;
