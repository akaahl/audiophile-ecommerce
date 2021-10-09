export const fetchData = (dataUrl, cartUrl) => async (dispatch) => {
  Promise.all([
    fetch(dataUrl).then((val) => val.json()),
    fetch(cartUrl).then((val) => val.json()),
  ])
    .then(([data, cart]) => {
      const storageData = {
        data,
        cart,
      };

      localStorage.setItem("storage", JSON.stringify(storageData));

      dispatch({
        type: "FETCH_DATA",
        payload: {
          data,
          cart,
        },
      });
    })
    .catch((err) => console.log(err));
};
