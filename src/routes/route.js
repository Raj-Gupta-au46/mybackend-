const express = require('express');
const router = express.Router();


 BookModel=require('../models/bookmodel')
const Bookcontroller=require('../controllers/bookcontrol')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", Bookcontroller.createBook)
router.get("/getBooklist", Bookcontroller.getBookslist)

module.exports = router;