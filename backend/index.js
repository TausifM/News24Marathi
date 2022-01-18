const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const newsRoute = require("./routes/newsRoute");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
//const listRoute = require("./routes/listRoute");
dotenv.config();

const DB_URL =
  "mongodb+srv://NEWS:TAUSIF@cluster0.swhpf.mongodb.net/NEWS24MARATHI?retryWrites=true&w=majority";
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error(err);
  });

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/news", newsRoute);
app.use("/api/auth", authRoute);
//app.use("/api/lists", listRoute);
const PORT = 4230;
app.listen(PORT, () => {
  console.log(`Backend Starts on port http://localhost:${PORT}`);
});
