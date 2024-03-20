export const addToFav = (item) => ({
    type: 'ADD_TO_FAVOURITE',
    payload: item,
  });
  
  export const removeFromFav = (item) => ({
    type: 'REMOVE_FROM_FAVOURITE',
    payload: item,
  });
  