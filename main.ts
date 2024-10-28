import { Product } from "./Product/Product";
import { NoPerishableProduct } from "./Product/NoPerishableProduct";
import { PerishableProduct } from "./Product/PerishableProduct";

var products: Product[] = []; 

let t = new NoPerishableProduct("", 1, 1, 1);

products.push(new PerishableProduct("maçã", 10, 15 ,20, "15/11/2024"));
products.push(new NoPerishableProduct("Lapis", 0.25, 2, 100));

products[1].stock = 0;

function listAllProducts(): void {
  console.log("----------- All Products --------------");
  products.map((product, index) => {
    console.log(`ID: ${index+1} | Product Name: ${product.name}`);
  })
}

function listProductsInStock(): void {
  let productsInStock = products.filter((product) => product.stock > 0); 
  console.log("----------- In Stock --------------");
  productsInStock.map((product, index) => {
    console.log(`ID: ${index+1} | Product Name: ${product.name}`);
  })
}

listAllProducts();

listProductsInStock();