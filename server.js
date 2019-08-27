const express = require("express");
const app = express();
const morgan = require("morgan");

const PORT = process.env.PORT || 4000;

const { userRouts, postRouts } = require("./api/routes");

app.use(morgan("dev"));
app.use(express.json());

// initialize db
require("./api/models")();

app.get("/health-check", (req, res, next) => {
  res.status(200).json({
    message: "Server is Up & Healthy!",
    data: {}
  });
});

app.use("/users", userRouts);
app.use("/posts", postRouts);

app.use((req, res, next) => {
  const error = new Error("Invalid Route, U Turn!");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: "Request Failed!",
    data: {
      error: err.message || "What R U doing?? Watch your steps!!"
    }
  });
});

app.listen(PORT, err => {
  if (err) {
    console.error("Server Failed!");
    console.error(`Error: ${err}`);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
