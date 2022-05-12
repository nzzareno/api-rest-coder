class Productos {
  constructor() {
    this.productos = [
      {
        title: "DC Gorra Star Flexfit Curve Brim Hat",
        price: 500,
        thumbnail:
          "https://m.media-amazon.com/images/I/81PxWIXqKGL._AC_UX679_.jpg",
        id: 1,
      },
      {
        title: "PUMA Evercat Dillon - Gorra elástica",
        price: 420,
        thumbnail:
          "https://m.media-amazon.com/images/I/71Fdr1s6NxL._AC_UX679_.jpg",
        id: 2,
      },
      {
        title: "VOLCOM Gorra Flexfit Full Stone",
        price: 300,
        thumbnail:
          "https://m.media-amazon.com/images/I/81VCRQ5O5lL._AC_UX679_.jpg",
        id: 3,
      },
    ];
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
      id: this.productos.length + 1,
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
