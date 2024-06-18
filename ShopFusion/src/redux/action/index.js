import {
  ADD_CURRENT_USER,
  ADD_USER,
  DEL_CURRENT_USER,
  UPDATE_CURRENT_USER,
} from "./action";

// For Add Item to Cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// For Delete Item to Cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

// For add Users in Local Storage

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// For update Users in Local storage
export const updateUser = (user) => {
  return {
    type: "UPDATEUSER",
    payload: user,
  };
};

export const addCurrentUser = (user) => {
  return {
    type: ADD_CURRENT_USER,
    payload: user,
  };
};

export const delCurrentUser = (user) => {
  return {
    type: DEL_CURRENT_USER,
    payload: user,
  };
};

export const updateCurrentUser = (user) => {
  return {
    type: UPDATE_CURRENT_USER,
    payload: user,
  };
};
