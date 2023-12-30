const mongoose = require("mongoose");
const express = require("express");
const Cors = require("cors");
const Videos = require("./dbModel");

const app = express();
const port = process.env.PORT || 9000;
const connection_uri = "mongodb://localhost:27017/tiktok";

app.use(express.json());
app.use(Cors());

mongoose
  .connect(connection_uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })

const db = mongoose.connection;


app.get("/", (req, res) => res.status(200).send("He so lo, ho so ly ly"));

app.post("/v2/posts", async (req, res) => {
  try {
    const dbVideos = req.body;
    console.log("Received POST request:", dbVideos);
    const data = await Videos.create(dbVideos);
    console.log("Data created:", data);
    res.status(201).send(data);
  } catch (err) {
    console.error("Error in POST request:", err);
    res.status(500).send(err);
  }
});

app.get("/v2/posts", (req, res) => {
  Videos.find()
    .exec()
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.error("Error fetching videos:", err);
      res.status(500).send("Internal Server Error");
    });
});

app.listen(port, () => console.log(`Listening on localhost: ${port}`));
