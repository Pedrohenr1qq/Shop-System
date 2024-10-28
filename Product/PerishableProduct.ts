import { Product } from "./Product";

export class PerishableProduct extends Product{
  protected _type: string= "Perishable"; 
  private _validateDate: string;
  constructor(name: string, purchasePrice: number, salePrice: number, stock: number, validateDate: string){
    super(name, purchasePrice, salePrice, stock);
    this._validateDate = validateDate
  }

  public get validateDate() : string {
    return this._validateDate;
  }

  public set validateDate(newValidateDate : string) {
    this._validateDate = newValidateDate;
  }

  showProduct(): string{
    return `
    -------------- PRODUCT -----------------
      Name: ${this.name}
      Purchase price: ${this.puchasePrice}
      Sale price: ${this.salePrice}
      In stock: ${this.stock}
      Validate data: ${this.validateDate}
    ----------------------------------------
    `
  }
}