import { deleteProduct, findAllProducts, findProductById, createPerishableProduct, createNoPerishableProduct } from "../Service/product.service";

export function findAllProductsController(){
  console.log("----------- All Products --------------");
  findAllProducts().map((product, index) => {
    console.log(`ID: ${index+1} | Product Name: ${product.name} | Type: ${product.type}`);
  });
}

export function findProductsInStock() {
  let productsInStock = findAllProducts().filter((product) => product.stock > 0); 
  console.log("----------- In Stock --------------");
  productsInStock.map((product, index) => {
    console.log(`ID: ${index+1} | Product Name: ${product.name} | Type: ${product.type}`);
  })
}

export function findProductsOutOfStock() {
  let productsInStock = findAllProducts().filter((product) => product.stock == 0); 
  console.log("----------- Out of Stock --------------");
  productsInStock.map((product, index) => {
    console.log(`ID: ${index+1} | Product Name: ${product.name} | Type: ${product.type}`);
  })
}

export function findProductByIdController(id: number){
  const product = findProductById(id-1);
  if(!product) return console.log("Product  not found");
  console.log("--------- Product by ID ------------");
  console.log(`ID: ${id} | Product Name: ${product.name}`);
}

export function createNoPerishableProductController(name: string, purchasePrice: number, salePrice: number, stock: number){
  if(name.trim() == "") return console.log("Invalid name");
  if(purchasePrice <= 0) return console.log("Invalid purchase price");
  if(salePrice <= 0) return console.log("Invalid sale price");
  if(stock < 0) return console.log("Invalid stock");

  createNoPerishableProduct(name, purchasePrice, salePrice, stock);
  console.log("No-perishable product created");
}

export function createPerishableProductController(name: string, purchasePrice: number, salePrice: number, stock: number, validateData: string){
  if(name.trim() == "") return console.log("Invalid name");
  if(purchasePrice <= 0) return console.log("Invalid purchase price");
  if(salePrice <= 0) return console.log("Invalid sale price");
  if(stock < 0) return console.log("Invalid stock");

  if(validateData.trim() == "") return console.log("Invalid validate data");

  createPerishableProduct(name, purchasePrice, salePrice, stock, validateData);
  console.log("Perishable-product created");
}

export function incrementProduct(id: number){
  if(!findProductById(id-1)) return console.log("Product not found");
}

export function deleteProductController(id: number){
  if(!findProductById(id-1)) return console.log("Product not found");
  deleteProduct(id-1);
}