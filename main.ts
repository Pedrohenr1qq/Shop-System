// Depenencies
const prompt= require('prompt-sync')();

// Internal Requires
import { Product } from "./Product/Product";
import { NoPerishableProduct } from "./Product/NoPerishableProduct";
import { PerishableProduct } from "./Product/PerishableProduct";

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

// Menus
function showMainMenu(): void{
  console.log(`
Which service do you want to access?
--------------------- Fox Shop System --------------------
  1 - Products
  2 - Clients
  3 - Sales
  4 - End Program
----------------------------------------------------------
  `);
}

function showProductMenu(): void {
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
}

function showClientMenu(): void {
  console.log(`
    -------------------- CLIENTS ---------------------
      1 - Show all clients
      2 - Register new client
      0 - BACK
    ----------------------------------------------------------
  `);
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
      
      case 2: showClientMenu();
        break;

      case 3: showSaleMenu();
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
        listAllProducts();
        break;
    
      case 2:
        listProductsInStock();
        break;
      
      case 3:
        listProductsOutOfStock();
        break;

      case 4:
        registerProduct();
        break;

      case 5:
        incrementProduct();
        break;

      case 6:
        deleteProduct();
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

// PRODUCTS
function listAllProducts(): void {
  console.log("----------- All Products --------------");
  products.map((product, index) => {
    console.log(`ID: ${index+1} | Product Name: ${product.name} | Type: ${product.type}`);
  });
}

function listProductsInStock(): void {
  let productsInStock = products.filter((product) => product.stock > 0); 
  console.log("----------- In Stock --------------");
  productsInStock.map((product, index) => {
    console.log(`ID: ${index+1} | Product Name: ${product.name} | Type: ${product.type}`);
  })
}

function listProductsOutOfStock(): void {
  let productsInStock = products.filter((product) => product.stock == 0); 
  console.log("----------- Out of Stock --------------");
  productsInStock.map((product, index) => {
    console.log(`ID: ${index+1} | Product Name: ${product.name} | Type: ${product.type}`);
  })
}

function registerProduct(): void {
  const name = getInput("Type the name of the product: ", "string");
  const purchasePrice = getInput("Type the purchase price of the product: ", "number");
  const salePrice = getInput("Type the sale price of the product: ", "number");
  const stock = getInput("Type the number of this product in stock: ", "number");
  const isPerishable = (getInput("Is perishable (Y to YES and any other key to NO)? ", "string")) == "Y";
  if(isPerishable){
    const validateDate = getInput("Type the validateDate: ", "string");
    products.push(new PerishableProduct(name, purchasePrice, salePrice, stock, validateDate));
  }
  else products.push(new NoPerishableProduct(name, purchasePrice, salePrice, stock));

  console.log("\nProduct registered");
}

function incrementProduct(): void{
  const id = getInput("Type the ID of the product: ", "number");
  let quantity = getInput("Type the new quantity to increment: ", "number");
  if(quantity < 0) quantity = 0;
  if(!products[id]){
    console.log("\nProduct not found");
    return;
  }
  products[id].stock+=quantity;
  console.log(`New stock of ${products[id].name}: ${products[id].stock}`);
}

function deleteProduct(): void{
  const id = getInput("Type the ID of the product: ", "number");
  if(!products[id]){
    console.log("\nProduct not found");
    return;
  }
  products.splice(id-1, 1);
  console.log("\nProduct deleted");
}