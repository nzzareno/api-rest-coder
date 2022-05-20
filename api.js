const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("1234567890", 5);
class Productos {
  constructor() {
    this.productos = [];
  }

  obtenerProductos() {
    return this.productos;
  }

  obtenerProducto(id) {
    return this.productos.find((producto) => producto.id === Number(id));
  }

  create(data) {
    const newProduct = {
      ...data,
     id:  nanoid(),
    };
    this.productos.push(newProduct);
    return newProduct;
  }

  eliminarProducto(id) {
    this.productos = this.productos.filter(
      (producto) => producto.id !== Number(id)
    );
  }

  actualizarProducto(id, data) {
    const producto = this.obtenerProducto(id);
    if (producto) {
      Object.assign(producto, data);
      return producto;
    }
    throw new Error();
  }
}

module.exports = Productos;
