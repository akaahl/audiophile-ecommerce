export const fetchData = (dataUrl, cartUrl) => async (dispatch) => {
  Promise.all([
    fetch(dataUrl).then((val) => val.json()),
    fetch(cartUrl).then((val) => val.json()),
  ])
    .then(([data, cart]) => {
      const storageData = {
        data,
        cart,
        total: 0,
      };

      localStorage.setItem("storage", JSON.stringify(storageData));

      dispatch({
        type: "FETCH_DATA",
        payload: {
          data,
          cart,
          total: storageData.total,
        },
      });
    })
    .catch((err) => console.log(err));
};

export const updateData = (data) => async (dispatch) => {
  dispatch({
    type: "UPDATE_CART",
    payload: {
      data: data.data,
      cart: data.cart,
      total: data.total,
    },
  });
};
