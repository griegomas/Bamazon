DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Captain Kangaroo", "Videos", 19.95, 50),
  ("Gum", "Food", 1.99, 1100),
  ("Lethal Weapon", "Videos", 27.50, 150),
  ("Duct Tape", "Hardware", 5.00, 500),
  ("Brass Knuckles", "Accessories", 30.00, 135),
  ("Bottled Water", "Food", 1.00, 10000),
  ("Wrench", "Hardware", 17.00, 75),
  ("Sun Glasses", "Accessories", 25.00, 66),
  ("Ronin", "Videos", 20.00, 34),
  ("Screw", "Hardware", 0.05, 23000);
