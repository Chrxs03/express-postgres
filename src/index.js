const express = require("express");
const app = express();
const port = 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
