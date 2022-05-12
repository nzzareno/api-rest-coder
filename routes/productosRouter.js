const express = require("express");
const Productos = require("../api");

const router = express.Router();
const itemService = new Productos();

router.get("/", (req, res) => {
  res.json(itemService.obtenerProductos());
});

router.post("/", (req, res) => {
  if (!req.body.title && !req.body.price && !req.body.thumbnail) {
    res.status(400).json({
      error: "Bad Request",
      message: "Title, price and thumbnail are required",
    });
  }
  const producto = itemService.create(req.body);
  res.json(producto);
});

router.get("/:id", (req, res) => {
  const producto = itemService.obtenerProducto(req.params.id);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ error: "Producto no encontrado" });
  }
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const producto = itemService.actualizarProducto(id, req.body);
  res.json(producto);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  itemService.eliminarProducto(id);
  res.json({ message: "Producto eliminado" });
});

module.exports = router;
