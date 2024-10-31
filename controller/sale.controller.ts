import { findAllSales } from "../Service/sale.service";

export function findAllSalesController(){
  const sales = findAllSales();
  console.log("----------- All Sales --------------");
  sales.map((sale, index) => {
    console.log(`ID: ${index+1} | Client Name: ${sale.clientName} | Product quantity: ${sale.products.length}`);
  });
  console.log();
}