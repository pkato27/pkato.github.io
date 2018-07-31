var mysql = require("mysql");

var inquirer = require("inquirer");
const Tablefy = require("tablefy")


var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;

 inventory();
promptUser();
   
  });
  //Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

//The first should ask them the ID of the product they would like to buy.

function promptUser(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'item_id',
            message: 'What is the id of the product you would like to buy',

        },
        //The second message should ask how many units of the product they would like to buy.

        {
            type: 'input',
            name: 'quantity',
            message: 'How many units would you like to buy?'
        }
    ]).then(function(answer){
        console.log('You have selected: ' + answer.item_id);
        console.log('the amount you have selected: ' + answer.quantity);

        var item = answer.item_id;
        var quantity = answer.quantity;
        

        var queryStr = 'SELECT * FROM products WHERE ?';
        connection.query(queryStr, {item_id: item}, function(err,data){
            // let table = new Tablefy('table');
            // table.draw(data);
            if(err) throw err;
            if(data.length === 0){
                console.log('Sorry! please select a valid id');
            } else {productData = data[0];
            if(quantity <= productData.stock_quantity){
                console.log('Order has been placed for '+ quantity);
                var updateQuery = 'UPDATE products SET stock_quantity ' +(productData.stock_quantity - quantity) + ' WHERE item_id: ' + item;

            } else {
                console.log("Sorry we do not have that much in stock");
            } 
        }
        })


    })
}

function inventory(){
    queryStr = 'SELECT * FROM products';
    connection.query(queryStr, function(err, data){
        if(err) throw err;
        let table = new Tablefy('table');
            table.draw(data);

        console.loq("this is the Inventory");
       
        for(var i = 0; i < data.length; i++){
            var productR = '';
            productR += ' Item id: ' + data[i].item_id;
            productR += ' Product: ' + data[i].product_name;
            productR += ' Department ' + data[i].department_name;
            productR += ' Price: ' + data[i].price;
            productR += 'Items remaining: ' + data[i].stock_quantity;
            // console.log(productR);

        }
    })
}




