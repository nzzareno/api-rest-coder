const express = require("express");
const routes = require("./routes");
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(__dirname + "/public"));
routes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)}).on("error", (err) => {
    console.log(err);
    throw err;
  });
