export const fetchData = (dataUrl, cartUrl) => async (dispatch) => {
  Promise.all([
    fetch(dataUrl).then((val) => val.json()),
    fetch(cartUrl).then((val) => val.json()),
  ])
    .then(([data, cart]) => {
      console.log(data, cart);
    })
    .catch((err) => console.log(err));
};
