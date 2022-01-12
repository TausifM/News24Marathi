const express = require("express");
const mongoose = require("mongoose");
const newsRoute = require("./routes/newsRoute");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
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

app.use("/api/news", newsRoute);
app.use("/api/auth", authRoute);
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Backend Starts on port http://localhost:${PORT}`);
});
