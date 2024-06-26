const userRoute = require("./User.routes");
const adminRoute=require('./Admin.routes')
const seriesRoute=require('./Series.routes')
const movieRoute=require('./Movie.routes')
const docuRoute=require('./Docu.routes')
const sportRoute=require('./Sport.routes')
const webRoute=require('./Web.routes')
const productRoute=require('./Product.routes')
const blogRoute=require('./Blog.routes')
const bookRoute=require('./Book.routes')
const eventRoute=require('./Event.routes')
const accountRoute=require('./Account.routes')
const errorRoute=require('./Error.routes')
const imageRoute=require('./Image.routes')
const horrorRoute=require('./Horror.routes')
const diskRoute=require('./Disk.routes')
const disneyRoute=require('./Disney.routes')
const comdeyRoute=require('./Comdey.routes')
const abcRoute=require('./Abc.routes')
const xyzRoute=require('./Xyz.routes')
const set1Route=require('./Set1.routes')
const set2Route=require('./Set2.routes')
const set3Route=require('./Set3.routes')
const set4Route=require('./Set4.routes')


const express = require("express");
const router = express();


router.use("/user-link", userRoute);
router.use('/admin-list',adminRoute)
router.use('/series-list',seriesRoute)
router.use('/movie-list',movieRoute)
router.use('/docu-list',docuRoute)
router.use('/sport-list',sportRoute)
router.use('/web-list',webRoute)
router.use('/product-list',productRoute)
router.use('/blog-list',blogRoute)
router.use('/book-list',bookRoute)
router.use('/event-list',eventRoute)
router.use('/account-list',accountRoute)
router.use('/error-list',errorRoute)
router.use('/image-list',imageRoute)
router.use('/horror-list',horrorRoute)
router.use('/disk-list',diskRoute)
router.use('/disney-list',disneyRoute)
router.use('/comdey-list',comdeyRoute)
router.use('/abc-list',abcRoute)
router.use('/xyz-list',xyzRoute)
router.use('/set1-list',set1Route)
router.use('/set2-list',set2Route)
router.use('/set3-list',set3Route)
router.use('/set4-list',set4Route)


module.exports = router;
