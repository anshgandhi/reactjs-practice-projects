import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items : [],
    totalAmount : 0,
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.value);
        const updatedTotalAmount = state.totalAmount + action.value.price * action.value.amount;
        return {
            items: updatedItems,
            totalAmount : updatedTotalAmount,
        };
    } else if (action.type === 'REMOVE') {
        console.log("REMOVING - ing");
    }
    return defaultCartState;
};

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = item => {
        dispatchCartAction({ type : 'ADD', value : item });
    };

    const removeItemToCartHandler = item => {
        dispatchCartAction({ type : 'REMOVE', value : item });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount : cartState.totalAmount,
        addItem : addItemToCartHandler,
        removeItem : removeItemToCartHandler,
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;