import { Sale } from "../model/Sale";
import { Client } from "../model/Client";
import { Product } from "../model/Product/Product";

let sales: Sale[] = [];

export function findAllSales(){
  return sales;
}

export function findSaleById(id: number){
  return sales[id];
}

export function createClient(client: Client, products: Product[]){
  sales.push(new Sale(client, products));
}