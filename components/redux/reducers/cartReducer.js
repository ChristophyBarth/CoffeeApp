const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': return { ...state,
            cartItems: state.cartItems.some(item => item.id === action.payload.id) 
            ? state.cartItems.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
             : [...state.cartItems, action.payload] };
        case 'ADD_ONE': return { ...state, cartItems: state.cartItems.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item) };
        case 'REMOVE_ONE': return {
            ...state,
            cartItems: state.cartItems.map(item =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
            )
                .filter(item => item.quantity > 0)
        };
        case 'EMPTY_CART': return { ...state, cartItems: [] };
        default: return state;
    }
};

export default cartReducer;
