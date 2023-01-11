const express = require("express");
const router = express.Router();
const scraper = require("../lib/scraper");

const replaceTxt = "Apple\n";

// Fingerprint iPhones
router.get("/iPhones/fingerprint", async (req, res) => {
  const devices = await scraper("https://www.gsmarena.com/results.php3?nYearMin=2015&sMakers=48&sFingerprints=1", replaceTxt);
  res.json(devices)
});

// Fingerprint iPads
router.get("/iPads/fingerprint", async (req, res) => {
  const devices = await scraper("https://www.gsmarena.com/results.php3?mode=tablet&sMakers=48&sFingerprints=1", replaceTxt);
  res.json(devices)
});

// Headphone iPads
router.get("/iPads/headphone", async (req, res) => {
  const devices = await scraper("https://www.gsmarena.com/results.php3?mode=tablet&chk35mm=selected&sMakers=48", replaceTxt);
  res.json(devices)
});

// Cellular iPads
router.get("/iPads/cellular", async (req, res) => {
  const devices = await scraper("https://www.gsmarena.com/results.php3?mode=tablet&sMakers=48&sSIMTypes=1,2,3", replaceTxt);
  res.json(devices)
});

module.exports = router;
