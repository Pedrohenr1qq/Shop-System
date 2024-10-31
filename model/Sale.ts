import { Product } from "./Product/Product";
import { Client } from "../model/Client";

export class Sale{
  private _client: Client;
  private _products: Product[];

  constructor(client: Client, products: Product[]){
   this._client = client;
   this._products = products;
  }
  
  public get clientName() : string {
    return this._client.name;
  }
  
  
  public get products() : Product[]{
    return this._products;
  }
  

  public detailSale(): string{
    let productsList:string = "Products:\n";
    productsList += this._products.map((product, index) => {
      return `${index}º product - ${product.name}: R$${product.salePrice}\n`
    })

    let profit:number = this._products.reduce((acumulator, product) => acumulator + ((product.salePrice - product.purchasePrice) * product.stock), 0);

    return `
----------- Sale ------------
Client: ${this._client.name}
${productsList}
Profit: R${profit}
    `
  }
}