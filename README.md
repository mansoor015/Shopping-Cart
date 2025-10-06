🛒 Shopping Cart App

A simple and interactive shopping cart web application built using React, Vite, and Tailwind CSS.
This project displays a list of products that can be filtered by category and added to a persistent shopping cart.
Users can manage cart items, adjust quantities, and place an order with a success confirmation page.

🚀 Features
🏠 Product Display

Displays a list of available products with images, names, and prices.

Each product includes an “Add to Cart” button.

The Navbar contains product categories that dynamically filter displayed products.

🛍️ Shopping Cart

Shows all products added to the cart along with:

Product image and name

Individual quantity

Price per item and subtotal

Includes ➕ (plus) and ➖ (minus) buttons to adjust product quantities.

Items can also be removed individually from the cart.

The cart data persists in localStorage, so it remains saved even after a page refresh.

💳 Order Placement

Displays the total item count and subtotal at the bottom of the cart.

Includes a “Place Order” button that:

Clears the cart

Redirects the user to a success page

✅ Success Page

After placing the order, the user is navigated to a confirmation screen with the message:
“Order placed successfully!”

🧰 Tech Stack
Technology	Description
React.js (Vite)	Frontend framework for building UI components
Tailwind CSS	Utility-first CSS framework for styling
React Router	For handling navigation between pages
React Context API	For global state management of products and cart
LocalStorage	To persist cart data across page refreshes
📂 Folder Structure
shopping-cart/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── Cart.jsx
│   │
│   ├── context/
│   │   └── ProductContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CartPage.jsx
│   │   └── Success.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md

⚙️ Installation & Setup

1. Clone the repository

git clone https://github.com/yourusername/shopping-cart.git
cd shopping-cart


2. Install dependencies

npm install


3. Run the project

npm run dev


Open in browser

http://localhost:5173

💡 How It Works

The user selects a category from the navbar to filter products.

Clicks “Add to Cart” to add items.

Cart updates dynamically and stores data in localStorage.

Inside the cart, users can:

Increase or decrease quantities.

Remove items completely.

View total cost and item count.

Clicking “Place Order” clears the cart and redirects to the success page.