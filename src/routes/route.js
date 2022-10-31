const express = require('express');

const router = express.Router();



const newBookController= require("../controllers/bookController")



router.get("/", function (req, res) {

    res.send("Hello, Welcome to Programming Yatra")

})



router.post("/createNewAuthor", newBookController.createNewAuthor)



router.get("/getNewAuthor", newBookController.getNewAuthor)



router.post("/createNewBook", newBookController.createNewBook)



router.get("/getNewBook", newBookController.getNewBook)



router.post("/createNewPublisher", newBookController.createNewPublisher)



router.get("/getNewPublisher", newBookController.getNewPublisher)



router.put("/putNewBook", newBookController.putNewBook)




router.put("/updateRating", newBookController.updateRating)



module.exports = router;