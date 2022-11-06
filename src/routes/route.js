const express = require('express');

const router = express.Router();

const validateToken=require("../middleware/auth")

const userController= require("../controllers/userController")

router.get("/test-me", function (req, res) {

    res.send("Hi this is my learning period !")

})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId", validateToken.validateToken, userController.getUserData)

router.put("/users/:userId",validateToken.validateToken, userController.updateUser)

router.delete("/users/:userId",validateToken.validateToken,userController.deletedSchoolData)

module.exports = router;