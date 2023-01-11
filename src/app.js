require('dotenv').config()

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

app.listen(PORT, () => {
  console.log(`App is running`);
});
