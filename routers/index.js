const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");
const bodyParser = require("body-parser");
const multer = require('multer');
const path = require('path');
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post("/register", jsonParser, userController.registerNewUser);
router.post("/login", jsonParser, userController.loginUser);
router.post("/storedetails",  jsonParser, userController.storeDetails)
router.post("/storejobdetails", jsonParser, userController.storeJobDetails)
router.post("/storejobexperience", jsonParser, userController.storeJobExperience)
router.post("/storeskills", jsonParser, userController.storeSkills)
router.post("/storesummary", jsonParser, userController.storeSummary)
router.post("/getalljobs", jsonParser, userController.getAllJobs)
router.post("/storeeducationdetails", jsonParser, userController.storeEducationDetails)
router.post("/storeinterests", jsonParser, userController.storeInterests)
router.post("/getdata", jsonParser, userController.getData)

module.exports = router;