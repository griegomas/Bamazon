
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,


  user: "root",


  password: "root",
  database: "bamazon"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  getproducts();
});


function getproducts() {

  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

 
    console.log(res);

  
    promptfunc(res);
  });
}
function promptfunc(inventory) {

  inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message: "Enter the ID of the item you would like to purchase or enter 'x' to exit",
        validate: function(val) {
          return !isNaN(val) || val.toLowerCase() === "x";
        }
      }
    ])
    .then(function(val) {
  
      exitcheck(val.choice);
      var choiceId = parseInt(val.choice);
      var product = icheck(choiceId, inventory);

    
      if (product) {
       
        Qprompt(product);
      }
      else {
       
        console.log("\nDon't have it, sorry!");
        getproducts();
      }
    });
}

// Prompt the customer for a product quantity
function Qprompt(product) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "quantity",
        message: "Enter how many you want or enter 'x' to exit",
        validate: function(val) {
          return val > 0 || val.toLowerCase() === "x";
        }
      }
    ])
    .then(function(val) {
    
      exitcheck(val.quantity);
      var quantity = parseInt(val.quantity);
      if (quantity > product.stock_quantity) {
        console.log("\nNot enough on hand!!!!!");
        getproducts();
      }
      else {
        purchase(product, quantity);
      }
    });
}

function purchase(product, quantity) {
  connection.query(
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [quantity, product.item_id],
    function(err, res) {
      console.log("\nyou bought " + quantity + " " + product.product_name + "'s!");
      getproducts();
    }
  );
}
function icheck(choiceId, inventory) {
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].item_id === choiceId) {
      return inventory[i];
    }
  }
  return null;
}

function exitcheck(choice) {
  if (choice.toLowerCase() === "x") {
    console.log("Goodbye!");
    process.exit(0);
  }
}
