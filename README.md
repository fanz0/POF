# Planty of Food

POF is a company that aims to make the plant-based food more accessible.
His strenght are the purchasing groups, a group of users that want to buy the same products and make it possible with a unique order.

## My Role

My role is to create RESTful JSON APIs to manage all the users, all the products and all the orders.

# Instruction and Requirements

First of all You have to:

1. Clone repository with `git clone https://github.com/fanz0/POF.git`

- Go into right directory and install the dependencies with `npm i`

2. Create a Database with MongoDB (https://www.mongodb.com/atlas/database)

- Check all the informations and then copy the **connection string** ad the **password**.
- Paste in `app.js` in the right place with the password in the right field (it is explained by MongoDB).

3. Run the server with `npm run dev` and check that all is connected through console.
4. Use an API tester, like Postman, to check all the functionalities.

# API Documents

### USERS

- Get all users

```http
GET localhost:3000/api/users
```

- Get specific user using his id

```http
GET localhost:3000/api/users/:id
```

- Create a new user

```http
POST localhost:3000/api/users
```

- Update an existing user using his id

```http
PUT localhost:3000/api/users/:id
```

- Delete an existing user using his id

```http
DELETE localhost:3000/api/users/:id
```

## User Fields

- name
- surname
- email

### PRODUCTS

- Get all products

```http
GET localhost:3000/api/products
```

- Get specific product using his id

```http
GET localhost:3000/api/products/:id
```

- Create a new product

```http
POST localhost:3000/api/products
```

- Update an existing product using his id

```http
PUT localhost:3000/api/products/:id
```

- Delete an existing product using his id

```http
DELETE localhost:3000/api/products/:id
```

## Products Field

- name

### ORDERS

- Get all orders

```http
GET localhost:3000/api/orders
```

- Get specific order using his id

```http
GET localhost:3000/api/orders/:id
```

- Create a new order

```http
POST localhost:3000/api/orders
```

- Update an existing order using his id

```http
PUT localhost:3000/api/orders/:id
```

- Delete an existing order using his id

```http
DELETE localhost:3000/api/order/:id
```

- Filter all orders by date using a specific date (:date)

```http
GET localhost:3000/api/orders/date/:date
```

- Filter all orders by product using the product's id (:id)

```http
GET localhost:3000/api/orders/product/:id
```

## Orders Fields

- users
- products
- date (not required)
