// Depenencies
const prompt= require('prompt-sync')();

// Internal Requires
import { Product } from "./model/Product/Product";
import { NoPerishableProduct } from "./model/Product/NoPerishableProduct";
import { PerishableProduct } from "./model/Product/PerishableProduct";

import { createClientController, deleteClientController, findAllClientsController, findClientByIdController } from "./controller/client.controller";
import { findAllSalesController } from "./controller/sale.controller";
import {createNoPerishableProductController, createPerishableProductController, deleteProductController, findAllProductsController, findProductsInStock, findProductsOutOfStock } from "./controller/product.controller";

// Global Variables
var products: Product[] = [];

const BACK_OPTION = 0;


// ============== MAIN =================
function main(): void {
  //variables declarations
  let name: string;

  let userOption: number;

  // Start the program
  console.log("Welcome to Fox Shop System");

  name = getInput("Type your name: ", "string");
  console.log(`Welcome , Sr. ${name}. Let's continue`);

  while(manageMainChoice() != BACK_OPTION);
}

main()

// ================= FUNCTIONS ==================
// GENERAL
// Gets
function getInput(message: string, type: string): any{
  let inputValid: boolean = true;
  let input: string | number;
  do {
    if(type == "string") {
      input = prompt(message);
      inputValid = (typeof(input) === "string");
    }else {
      input = +prompt(message);
      inputValid = !isNaN(input);
    }

    if(!inputValid) console.log("The value is incorrect. Try again.\n");
  }while(!inputValid);

  return input;
}



function showSaleMenu(): void {
  console.log(`
    -------------------- SALES ---------------------
      1 - Show all sales
      2 - Show sale by client name
      3 - Register new sale
      4 - Detail sale
      0 - BACK
    ----------------------------------------------------------
  `);
}

// Management choice 
function manageMainChoice(): number{
  let userOption: number;
  do{
    console.log(`
Which service do you want to access?
--------------------- Fox Shop System --------------------
  1 - Products
  2 - Clients
  3 - Sales
  0 - End Program
----------------------------------------------------------
    `);

    userOption = getInput("Type your option: ", "number");
    switch (userOption) {
      case 1:
        manageProductChoice();
        break;
      
      case 2: 
        manageClientChoice();
        break;

      case 3: 
        manageSaleChoice();
        break;

      case 0: 
        console.log("See you soon!");
        break;

      default:
        console.log("Invalid option\n");
        break;
    }
  }while(userOption != BACK_OPTION);

  return userOption;
}

function manageProductChoice(): void{
  let userOption: number;
  let id: number;
  do {
    console.log(`
-------------------- PRODUCTS ---------------------
  1 - Show all products
  2 - Show products in stock
  3 - Show product out of stock
  4 - Register new product
  5 - Increment product
  6 - Delete product
  0 - BACK
----------------------------------------------------------
    `);

    userOption = getInput("Type your option: ", "number");
    switch (userOption) {
      case 1:
        findAllProductsController();
        break;
    
      case 2:
        findProductsInStock();
        break;
      
      case 3:
        findProductsOutOfStock();
        break;

      case 4:
        const name = getInput("Type the name of the product: ", "string");
        const purchasePrice = getInput("Type the purchase price of the product: ", "number");
        const salePrice = getInput("Type the sale price of the product: ", "number");
        const stock = getInput("Type the number of this product in stock: ", "number");
        const isPerishable = (getInput("Is perishable (Y to YES and any other key to NO)? ", "string")) == "Y";
        if(isPerishable){
          const validateDate = getInput("Type the validateDate: ", "string");
          createPerishableProductController(name, purchasePrice, salePrice, stock, validateDate);
        }
        else createNoPerishableProductController(name, purchasePrice, salePrice, stock);
        break;

      case 5:
        console.log("In develepment");
        break;

      case 6:
        id = getInput("Type the id of the product: ", "number");
        deleteProductController(id);
        break;
  
      case BACK_OPTION:
        console.log("Back to MAIN");
        break;
  
      default:
        console.log("Invalid option\n")
        break;
    }
  }while(userOption != BACK_OPTION);
}

function manageClientChoice(): void{
  let userOption: number;
  let id: number;
  let name: string;

  do {
    console.log(`
-------------------- CLIENTS ---------------------
  1 - Show all clients
  2 - Find client by ID
  3 - Register new client
  4 - Delete client
  0 - BACK
--------------------------------------------------
    `);
    userOption = getInput("Type your option: ", "number");

    switch (userOption) {
      case 1:
        findAllClientsController();
        break;
      
      case 2:
        id = getInput("Type the id of the client: ", "number");
        findClientByIdController(id);
        break;
    
      case 3:
        name = getInput("Type the name of the client: ", "string");
        createClientController(name);
        break;

      case 4:
        id = getInput("Type the id of the client: ", "number");
        deleteClientController(id);
        break;
        
      case BACK_OPTION:
        console.log("Back to main");
        break;

      default:
        console.log("Invalid option");
        break;
    }

  } while (userOption != BACK_OPTION);
}

function manageSaleChoice() {
  let userOption: number;
  do {
    console.log(`
-------------------- SALES ---------------------
  1 - Show all sales
  2 - Show sale by client name
  3 - Register new sale
  4 - Detail sale
  0 - BACK
------------------------------------------------
  `);
    userOption = getInput("Type your option: ", "number");

    switch (userOption) {
      case 1:
        findAllSalesController();
        break;
      
      case 2:
        break;

      case BACK_OPTION:
        console.log("Back to main");
        break;

      default:
        console.log("Invalid option");
        break;
    }
  } while (userOption != BACK_OPTION);

  
}