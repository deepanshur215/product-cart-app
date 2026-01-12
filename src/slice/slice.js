import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "product-price": {
    "Bread": 1.10,
    "Milk": 0.50,
    "Cheese": 0.90,
    "Soup": 0.60,
    "Butter": 1.20
  },
  "offers": {},
  "cart": {},
  "subTotal": 0.00,
  "savings": 0.00,
  "totalAmount": 0.00
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { name, quantity = 1 } = action.payload;
      const price = state["product-price"][name];
      if (state.cart[name]) {
        state.cart[name] += quantity;
      } else {
        state.cart[name] = quantity;
      }

      // Clear and recalculate offers on every cart change
      state.offers = {};

      // Cheese: Buy 1 get 1 free
      let cheeseOfferDiscount = 0;
      if (state.cart["Cheese"]) {
        // Number of 'free' Cheese is half the number purchased (integer division)
        const cheeses = state.cart["Cheese"];
        const freeCheese = Math.floor(cheeses / 2);
        // Each free Cheese gives a discount equal to its full price
        cheeseOfferDiscount = freeCheese * state["product-price"]["Cheese"];
        if (freeCheese > 0) {
          state.offers["Cheese"] = -cheeseOfferDiscount;
        }
      }

      // Soup: Buy 1 Soup, get 1 Bread half price (one half price Bread per Soup, up to number of Breads)
      let soupBreadOfferDiscount = 0;
      if (state.cart["Soup"] && state.cart["Bread"]) {
        const discounts = Math.min(state.cart["Soup"], state.cart["Bread"]);
        soupBreadOfferDiscount = discounts * (state["product-price"]["Bread"] / 2);
        if (discounts > 0) {
          state.offers["Bread"] = -soupBreadOfferDiscount;
        }
      }

      // Butter: Get a third off (apply to all Butter in cart)
      let butterOfferDiscount = 0;
      if (state.cart["Butter"]) {
        butterOfferDiscount = state.cart["Butter"] * (state["product-price"]["Butter"] / 3);
        if (state.cart["Butter"] > 0) {
          state.offers["Butter"] = -butterOfferDiscount;
        }
      }

      // Calculate subTotal and savings
      let subTotal = 0;
      Object.entries(state.cart).forEach(([item, qty]) => {
        subTotal += state["product-price"][item] * qty;
      });

      // Savings
      let savings = 0;
      Object.values(state.offers).forEach((s) => {
        savings += -s; // offers are stored as negative discounts
      });

      state.subTotal = subTotal;
      state.savings = savings;
      state.totalAmount = subTotal - savings;
    },
    removeFromCart: (state, action) => {
      if(state.cart[action.payload.name] > 1) {
        state.cart[action.payload.name] -= 1;
      } else {
        delete state.cart[action.payload.name];
      }

      // Recalculate offers and savings after removing item
      state.offers = {};

      // Cheese: Buy 1 get 1 free
      let cheeseOfferDiscount = 0;
      if (state.cart["Cheese"]) {
        const cheeses = state.cart["Cheese"];
        const freeCheese = Math.floor(cheeses / 2);
        cheeseOfferDiscount = freeCheese * state["product-price"]["Cheese"];
        if (freeCheese > 0) {
          state.offers["Cheese"] = -cheeseOfferDiscount;
        }
      }

      // Soup: Buy 1 Soup, get 1 Bread half price (one half price Bread per Soup, up to number of Breads)
      let soupBreadOfferDiscount = 0;
      if (state.cart["Soup"] && state.cart["Bread"]) {
        const discounts = Math.min(state.cart["Soup"], state.cart["Bread"]);
        soupBreadOfferDiscount = discounts * (state["product-price"]["Bread"] / 2);
        if (discounts > 0) {
          state.offers["Bread"] = -soupBreadOfferDiscount;
        }
      }

      // Butter: Get a third off (apply to all Butter in cart)
      let butterOfferDiscount = 0;
      if (state.cart["Butter"]) {
        butterOfferDiscount = state.cart["Butter"] * (state["product-price"]["Butter"] / 3);
        if (state.cart["Butter"] > 0) {
          state.offers["Butter"] = -butterOfferDiscount;
        }
      }

      // Recalculate subTotal and savings as in addToCart
      let subTotal = 0;
      Object.entries(state.cart).forEach(([item, qty]) => {
        subTotal += state["product-price"][item] * qty;
      });

      let savings = 0;
      Object.values(state.offers).forEach((s) => {
        savings += -s; // offers are stored as negative discounts
      });

      state.subTotal = subTotal;
      state.savings = savings;
      state.totalAmount = subTotal - savings;
    },
    updateCart: (state, action) => {
      state.cart[action.payload.name] = action.payload.quantity;
    },
  },
});

export const { addToCart, removeFromCart, updateCart } = productSlice.actions;

export default productSlice.reducer;
