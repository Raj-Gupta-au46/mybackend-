const express = require("express");

const router = express.Router();

const cowinController = require("../controllers/cowinController");

const dataController = require("../controllers/dataController");

router.get("/Home", (req, res) => {

  res.status(200).send("The code is running ");

});



router.get("/cowin/states", cowinController.getStates);



router.get("/cowin/districtsInState/:stateId", cowinController.getDistricts);



router.get("/cowin/getByPin", cowinController.getByPin);



router.post("/cowin/getOtp", cowinController.getOtp);



router.get("/getByDistrictId", cowinController.getByDistrictId);



router.get("/weather/london", dataController.getLondonWeather);



router.get("/weather/london/temperature", dataController.getLondonTemperature);



router.get("/getSelectedCities", dataController.getSelectedCities);



router.post("/meme", dataController.meme);



module.exports = router;