const productosRouter = require("./productosRouter");

function routes(app) {
  app.use("/api/productos", productosRouter);
}

module.exports = routes;
