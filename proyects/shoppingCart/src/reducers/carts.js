export const cartInitialState =
  JSON.parse(window.localStorage.getItem('cart')) || [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  REMOVE_ONE_PRODUCT: 'REMOVE_ONE_PRODUCT',
};

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state));
};

export const cartReducer = (state = cartInitialState, action) => {
  if (action.type === CART_ACTION_TYPES.ADD_TO_CART) {
    const { id } = action.payload;
    const productIncartIndex = state.findIndex(item => item.id === id);
    if (productIncartIndex >= 0) {
      // const newCart = [...cart];
      // newCart[productIncartIndex].quantity += 1;
      // setCart(newCart);
      // un forma seria con el structuredClone.
      const newCart = structuredClone(state);
      newCart[productIncartIndex].quantity += 1;
      updateLocalStorage(newCart);
      return newCart;
    }
    const newState = [
      ...state,
      {
        ...action.payload, // product
        quantity: 1,
      },
    ];
    updateLocalStorage(newState);
    return newState;
  }
  if (action.type === CART_ACTION_TYPES.REMOVE_FROM_CART) {
    const { id } = action.payload;
    const newCart = state.filter(item => item.id !== id);
    updateLocalStorage(newCart);
    return newCart;
  }
  if (action.type === CART_ACTION_TYPES.CLEAR_CART) {
    updateLocalStorage([]);
    return [];
  }
  if (action.type === CART_ACTION_TYPES.REMOVE_ONE_PRODUCT) {
    const { id, quantity } = action.payload;
    console.log(state, "state");
    console.log(quantity);
    if (quantity <= 1) {
      console.log("entro");
      const newCart = state.filter(item => item.id !== id);
      updateLocalStorage(newCart);
      return newCart;
    }
    const newCart = state.map(item => {
      if (item.id === id) {
         item.quantity--;
         console.log(item.quantity);
      }
      return item;
    });
    updateLocalStorage(newCart);
    return newCart;
  }
  return state;
};
