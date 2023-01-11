require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bp = require("body-parser");

// Import routes
const iosRoute = require("./routes/ios");
const samsungRoute = require("./routes/samsung");

// Initialize app
const PORT = process.env.PORT;
const app = express();
app.use(cors());

// Use routes
app.use("/iOS", iosRoute);
app.use("/samsung", samsungRoute);

app.get("/", (req, res) => {
  res.json({
    iOS: [
      {
        title: "Fingerprint iPhones",
        endpoint: "/iOS/iPhones/fingerprint",
      },
      {
        title: "Fingerprint iPads",
        endpoint: "/iOS/iPads/fingerprint",
      },
      {
        title: "Headphone iPads",
        endpoint: "/iOS/iPads/headphone",
      },
      {
        title: "Cellular iPads",
        endpoint: "/iOS/iPads/cellular",
      },
    ],
    Samsung: [
      {
        title: "Headphone Samsung",
        endpoint: "/samsung/headphone",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`App is running`);
});
