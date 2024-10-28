// Depenencies
const prompt= require('prompt-sync')();

// Internal Requires
import { Product } from "./Product/Product";
import { NoPerishableProduct } from "./Product/NoPerishableProduct";
import { PerishableProduct } from "./Product/PerishableProduct";

// Global Variables
var products: Product[] = []; 

// ============== MAIN =================
function main(): void {
  //variables declarations
  let userOption: number = 0;

  const END_OPTION = -1;
  const BACK_OPTION = 0;

  let name: string, shopName: string;

  // Start the program
  console.log("Welcome to Fox Shop System");

  name = getInput("Type your name: ", "string");
  console.log(`Welcome , Sr. ${name}. Let's continue`);
  shopName = getInput("Type the name of your shop: ", "string");

  do{
    showMainMenu(shopName);
    userOption = getInput("Type your option: ", "number");

    manageMainChoice(userOption);
    userOption = getInput("Type your option: ", "number");
  }while(userOption != END_OPTION);

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
function showMainMenu(shopName: string): void{
  console.log(`
Which service do you want to access?
------------- ${shopName} - Fox Shop System --------------
  1 - Products
  2 - Clients
  3 - Sales
  4 - End Program
----------------------------------------------------------
  `);
}

function showProductMenu(): void {
  console.log(`
    -------------------- Fox Shop System ---------------------
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
    -------------------- Fox Shop System ---------------------
      1 - Show all clients
      2 - Register new client
      0 - BACK
    ----------------------------------------------------------
  `);
}


function showSaleMenu(): void {
  console.log(`
    -------------------- Fox Shop System ---------------------
      1 - Show all sales
      2 - Show sale by client name
      3 - Register new sale
      4 - Detail sale
      0 - BACK
    ----------------------------------------------------------
  `);
}

// Management choice 
function manageMainChoice(userChoice: number): void{
  switch (userChoice) {
    case 1:
      showProductMenu();
      break;
    
    case 2: showClientMenu();
      break;

    case 3: showSaleMenu();
      break;

    case 4: 
      console.log("See you soon!")
      process.exit(0);

    default:
      console.log("Invalid option\n");
      break;
  }
}

// PRODUCTS
function listAllProducts(): void {
  console.log("----------- All Products --------------");
  products.map((product, index) => {
    console.log(`ID: ${index+1} | Product Name: ${product.name}`);
  })
}

function listProductsInStock(): void {
  let productsInStock = products.filter((product) => product.stock > 0); 
  console.log("----------- In Stock --------------");
  productsInStock.map((product, index) => {
    console.log(`ID: ${index+1} | Product Name: ${product.name}`);
  })
}
