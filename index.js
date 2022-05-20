const express = require("express");
const routes = require("./routes");
const app = express();
const port = 8080;
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("1234567890", 5);

app.set("view engine", "ejs");
app.use(express.static(__dirname + "public"));
app.set("views", "./views");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const productos = [];

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/productos", (req, res) => {
  if (!req.body.title && !req.body.price && !req.body.thumbnail) {
    res.status(400).json({
      error: "Bad Request",
      message: "Title, price and thumbnail are required",
    });
  }
  const body = req.body;

  const producto = {
    id: nanoid(),
    title: body.title,
    price: body.price,
    thumbnail: body.thumbnail,
  };
  productos.push(producto);
  res.render("productos", {
    productos,
  });
});

app.get("/productos", (req, res) => {
  const data = {
    productos,
  };
  return res.render("productos", data);
});

routes(app);

app
  .listen(port, () => {
    console.log(`App listening on port ${port}!`);
  })
  .on("error", (err) => {
    console.log(err);
    throw err;
  });
