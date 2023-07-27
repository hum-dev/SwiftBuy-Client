import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productToAdd = action.payload;
            const itemIndex = state.cartItems.findIndex((item) => item.product_id === productToAdd.product_id);
      
            if (itemIndex >= 0) {
              state.cartItems[itemIndex].quantity += 1;
              toast.info(`Increased ${state.cartItems[itemIndex].name} cart quantity`, "quantity-toast");
            } else {
              const tempProduct = { ...productToAdd, quantity: 1 };
              state.cartItems.push(tempProduct);
              toast.success(`Added ${productToAdd.name} to cart`, "add-toast");
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
          },
        removeFromCart(state, { payload }) {
            state.cartItems = state.cartItems.filter((item) => item.product_id !== payload.product_id);
            toast.error(`${payload.name} removed from cart`, "remove-toast");
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },


        clearCart(state, action) {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error("Cart cleared", "clear-toast");
        },

        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { productPrice, cartQuantity } = cartItem;
                    const itemTotal = productPrice * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },

        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.product_id === action.payload.product_id
            );

            if (state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1;

                toast.info(`Decreased ${action.payload.name} quantity`,"decrease-cart toast");
            } else if (state.cartItems[itemIndex].quantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (item) => item.product_id !== action.payload.product_id
                );

                state.cartItems = nextCartItems;

                toast.error(`${action.payload.name} removed from cart`, "remove-cart toast");
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

    },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } = cartSlice.actions;

export default cartSlice.reducer;