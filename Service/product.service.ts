import { Product } from "../model/Product/Product";
import { PerishableProduct} from "../model/Product/PerishableProduct";
import { NoPerishableProduct } from "../model/Product/NoPerishableProduct";

var products: Product[] = [];

export function findAllProducts(){
  return products;
}

export function findProductById(id: number){
  return products[id];
}

export function createNoPerishableProduct(name: string, purchasePrice: number, salePrice: number, stock: number){
  products.push(new NoPerishableProduct(name, purchasePrice, salePrice, stock))
}

export function createPerishableProduct(name: string, purchasePrice: number, salePrice: number, stock: number, validateData: string){
  products.push(new PerishableProduct(name, purchasePrice, salePrice, stock, validateData));
}

export function deleteProduct(id: number){
  products.splice(id, 1);
}