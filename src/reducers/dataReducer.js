const initialState = { cart: [], data: [], total: 0 };

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, data: action.payload.data, cart: action.payload.cart };

    case "UPDATE_CART":
      return {
        ...state,
        cart: action.payload.cart,
        total: action.payload.total,
      };

    default:
      return { ...state };
  }
};

export default dataReducer;
