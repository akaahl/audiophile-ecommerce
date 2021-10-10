const allData = JSON.parse(localStorage.getItem("storage"));
const initialState = {
  cart: allData?.cart || [],
  data: allData?.data || [],
  total: allData?.total || 0,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: action.payload.data,
        cart: action.payload.cart,
        total: action.payload.total,
      };

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
