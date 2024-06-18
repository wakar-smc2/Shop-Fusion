// const currentUser = [];
import { ADD_CURRENT_USER, ADD_USER, DEL_CURRENT_USER, UPDATE_CURRENT_USER } from "../action/action";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || [],
};

const handleSubmitForm = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      const newUser = action.payload;
      const existUser = state.users.some(
        (x) => x.fullname === newUser.fullname && x.email === newUser.email
      );
      if (!existUser) {
        const updatedUsers = [...state.users, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        return {
          ...state,
          users: updatedUsers,
        };
      }
    case ADD_CURRENT_USER:
      const curUser = action.payload;
      const userExist = state.users.find(
        (x) => x.email === curUser.email && x.password === curUser.password
      );
      console.log(userExist);
      if (userExist) {
        // const updatedCurrentUsers = [...state.currentUser, userExist];
        localStorage.setItem("currentUser", JSON.stringify(userExist));
        return {
          ...state,
          currentUser: userExist
        }
      }
    case DEL_CURRENT_USER:
      localStorage.removeItem("currentUser");
      return {
        ...state,
        currentUser: null
      }
    case UPDATE_CURRENT_USER:
      // const updateUser = action.payload
      const updatedUserData = [...state.users, {...action.payload}];
      localStorage.setItem("users", JSON.stringify(updatedUserData));
        return {
          ...state,
          users: updatedUserData,
        };
    default:
      return state;
  }
};

export default handleSubmitForm;
