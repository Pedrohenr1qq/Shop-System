export abstract class Product {
  private _name: string;
  private _purchasePrice: number;
  private _salePrice: number;
  private _stock: number;
  protected abstract _type: string;
  
  constructor(name: string, purchasePrice: number, salePrice: number, stock: number){
    this._name = name;
    this._purchasePrice = purchasePrice;
    this._salePrice = salePrice;
    this._stock = stock;
  }

  
  public get name() : string {
    return this._name;
  }

  public set name(newName : string) {
    this._name = newName;
  }

  public get purchasePrice() : number {
    return this._purchasePrice;
  }

  public set puchasePrice(newPurchasePrice : number) {
    (newPurchasePrice < 0) ? 0 : null; 
    this._purchasePrice = newPurchasePrice;
  }

  public get salePrice() : number {
    return this._salePrice;
  }

  public set salePrice(newSalePrice : number) {
    (newSalePrice < 0) ? 0 : null; 
    this._salePrice = newSalePrice;
  }
  
  public get stock() : number {
    return this._stock;
  }

  public set stock(newStock : number) {
    (newStock < 0) ? 0 : null; 
    this._stock = newStock;
  }

  public get type() : string{
    return this._type;
  }
  

  public abstract showProduct(): string

}