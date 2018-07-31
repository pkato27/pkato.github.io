DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
    item_id INT(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR (50),
    department_name VARCHAR (50),
    price DECIMAL (10,2),
    stock_quantity INT(10),
    PRIMARY KEY(item_id)
);

-- i.e. Insert "mock" data rows into this database and table).

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES('earpods','Electronics',10.99,16),
    ('Golf Clubs','Sporting Goods', 199.99,11),
    ('Macbook','Electronics',1999.99,23),
    ('Iphone X','Electronics',999.99,45),
    ('Fishing pole','Outdoors',80.50,8),
    ('Pillow','Health&Beauty',24.25,32),
    ('Lawn mower','Outdoor',200.75,19),
    ('Bath robe','Health&Beauty',23.89,54),
    ('Nike shoes','Clothing',89.99,5);
