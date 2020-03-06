const cartItems = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter(item =>
        item.id !== action.payload.id
          ? console.log(
              "item false:" + item.id + " - payload: " + action.payload.id
            )
          : console.log(
              "item true:" + item.id + " - payload: " + action.payload.id
            )
      );
  }
  return state;
};

export default cartItems;
