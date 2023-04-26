const express = require("express");
const router = express.Router();
const path = require("path");

const GardensController = require("../controllers/gardens");


router.get("/gardens", GardensController.Index);
router.post("/gardens", GardensController.Create);

module.exports = router;