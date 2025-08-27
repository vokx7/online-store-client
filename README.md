# 🛒 Simplified Online Store Client 

## 📌 Project Description

This project is a simplified version of an online store client. The application allows users to:

* browse a list of products,
* add and remove products from the cart,
* view an order summary before placing it,
* display an order confirmation after submission.

The project is built using **React + TypeScript** with **Vite** as the bundler, and **HTML** i **CSS** for styling.

Link: https://vokx7.github.io/online-store-client/

---

## 🧠 Approach

While developing the application, I focused on:

* using `Context` for managing the cart state and rendering product content,
* storing the cart state in `localStorage`,
* applying `React Router` for navigation within the app (excluding the confirmation page),
* create an `MPA` with Vite for the order confirmation page,
* maintaining a clean component structure for better code readability.

---

## ⚙️ Assumptions

* Products come from a local data source (products.json).
* The entire process can be completed without adding items to the cart.
* After confirming an order and returning to the product list, the cart is cleared.
* The Order Confirmation (order-confirmation) is a separate page.
* Reducing the quantity of a product in the cart below 1 removes the entire row.
* Visual design improvements were not a priority – minimal CSS adjustments were made.

---

## 🚀 How to run the project locally

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the app in development mode**:

   ```bash
   npm run dev
   ```

3. **Open the app in your browser**:

   ```
   http://localhost:3000
   ```


