import { Product } from "./Product";

export class NoPerishableProduct extends Product{
  protected _type: string = "No perishable";
  constructor(name: string, purchasePrice: number, salePrice: number, stock: number){
    super(name, purchasePrice, salePrice, stock);
  }
    
  showProduct(): string{
    return `
    -------------- PRODUCT -----------------
      Name: ${this.name}
      Purchase price: ${this.purchasePrice}
      Sale price: ${this.salePrice}
      In stock: ${this.stock}
    ----------------------------------------
    `
  }
}