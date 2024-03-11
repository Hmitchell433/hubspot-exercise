const express = require("express");
const cors = require("cors");
const { parsed: dotenv } = require("dotenv").config();

const mediaRouter = require("./routes/media.routes");

const app = express();

const port = dotenv.SERVER_PORT || 3001;

app.use(cors());

app.get("/", (_, res) => {
  res.json({ message: "Hello World" });
});

app.use("/media", mediaRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
