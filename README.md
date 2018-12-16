## Overview


Gif of functionality: https://github.com/griegomas/Bamazon/blob/master/bamazon.gif

In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this week. The app will take in orders from customers and deplete stock from the store's inventory. As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

Make sure you save and require the MySQL and Inquirer npm packages in your homework files--your app will need them for data input and storage.


```
├── Bamazon-Customer
|  ├── bamazonCustomer.js
|  ├── package.json
|  └── schema.sql

The app allows a customer to purchase products (or not) depending on quantity available. If the quantity is not available for a given product, the purchase is denied.
If it is, the purchase completes. 
In all cases, the new product stock number is reported for each item.
User can exit at any time by entering x.
