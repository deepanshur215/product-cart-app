# Product Cart App

A modern e-commerce shopping cart application built with **React**, **Redux Toolkit**, and **Vite**. This application features a product listing page and a shopping cart with automatic offer calculations.

## 🔗 Live Demo

[View Live Application](https://your-deployment-url.com)

## 🚀 Tech Stack

- **React** - UI library for building user interfaces
- **Redux Toolkit** - State management for React applications
- **Vite** - Next-generation frontend build tool
- **React Redux** - Official React bindings for Redux

## ✨ Features

### Product Page
- Browse available products with their prices
- Add products to cart with a single click
- View all available items in a clean, organized layout

### Cart Page
- View all items added to your cart
- Adjust quantities of items (increase/decrease)
- Real-time calculation of:
  - **Subtotal** - Total price before discounts
  - **Savings** - Total amount saved from offers
  - **Total Amount** - Final price after applying offers

### Special Offers
The application automatically applies special offers when items are added to the cart:

1. **Cheese Offer**: Buy 1 Get 1 Free
   - For every 2 Cheese items, get 1 free

2. **Soup & Bread Offer**: Buy 1 Soup, Get 1 Bread Half Price
   - When you buy Soup, get Bread at 50% off (one half-price Bread per Soup)

3. **Butter Offer**: Get a Third Off
   - All Butter items in the cart get 33.33% discount

## 📦 Available Products

- Bread - £1.10
- Milk - £0.50
- Cheese - £0.90
- Soup - £0.60
- Butter - £1.20

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd product-cart-app
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```
The application will start on `http://localhost:5173` (or the next available port).

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Cart.jsx          # Cart page component
│   ├── CartItem.jsx      # Individual cart item component
│   ├── Product.jsx       # Product listing page component
│   └── ProductItem.jsx   # Individual product item component
├── slice/
│   └── slice.js          # Redux slice with cart logic and offers
├── store/
│   └── store.js          # Redux store configuration
├── App.jsx               # Main app component with routing
├── App.css               # Application styles
├── main.jsx              # Application entry point
└── index.css             # Global styles
```

## 🔧 Redux State Management

The application uses Redux Toolkit for state management with the following structure:

- **product-price**: Object containing product names and their prices
- **cart**: Object tracking items and their quantities in the cart
- **offers**: Object storing active offers and discounts
- **subTotal**: Calculated subtotal before discounts
- **savings**: Total savings from applied offers
- **totalAmount**: Final amount after discounts

### Redux Actions

- `addToCart`: Adds items to cart and recalculates offers
- `removeFromCart`: Removes items from cart and recalculates offers
- `updateCart`: Updates item quantity in cart

## 🎯 How It Works

1. **Product Page**: Users can view all available products and add them to the cart
2. **Cart Page**: Users can view their cart, see applied offers, and adjust quantities
3. **Automatic Offers**: When items are added or removed, the Redux slice automatically:
   - Checks for eligible offers
   - Calculates discounts
   - Updates subtotal, savings, and total amount

## 📝 License

This project is private and for personal/educational use.

## 👨‍💻 Development

This project uses:
- ESLint for code linting
- Vite for fast development and optimized builds
- React 19 with modern hooks and features

---

Made with ❤️ using React, Redux, and Vite
