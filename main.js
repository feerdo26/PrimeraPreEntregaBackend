import defaultProducts from "./datos.js";

class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct({ nombre, precio, gusto }) {
    const productId = this.generateProductId();
    const newProduct = {
      id: productId,
      nombre,
      precio,
      gusto,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  getProductById(productId) {
    const product = this.products.find((product) => product.id === productId);
    if (!product) {
      throw new Error("Producto no encontrado");
    }
    return product;
  }

  getHeladoProducts() {
    return this.products.filter((product) => product.gusto === "Helado");
  }

  generateProductId() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
}

const productManager = new ProductManager();
defaultProducts.forEach((product) => productManager.addProduct(product));

console.log("Productos iniciales:", productManager.getProducts());

console.log(
  "Productos con gusto de Helado:",
  productManager.getHeladoProducts()
);
