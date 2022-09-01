const express = require("express");
const { api_city_get } = require("../controllers/apiController");
const router = express.Router();

router.get('/city', api_city_get);

module.exports = router;