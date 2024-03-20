const initialState = {
  favItems: [],
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE': return { ...state, favItems: [...state.favItems, action.payload] };
    case 'REMOVE_FROM_FAVOURITE': return { ...state, favItems: state.favItems.filter(item => item.id !== action.payload.id) };
    default: return state;
  }
};

export default favReducer;
