export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item,
  });
  
  export const addQuantity = (item) => ({
    type: 'ADD_ONE',
    payload: item,
  });

  export const subtractQuantity = (item) => ({
    type: 'REMOVE_ONE',
    payload: item,
  });
  export const emptyCart = () => ({
    type: 'EMPTY_CART',
    payload: item,
  });
  