const express = require("express");
const router = express.Router();
const scraper = require("../lib/scraper");

// Headphone
router.get("/headphone", async (req, res) => {
    const devices = await scraper("https://www.gsmarena.com/results.php3?nYearMin=2017&chk35mm=selected&sMakers=9", "Samsung\n")
    res.json(devices)
});

module.exports = router;
