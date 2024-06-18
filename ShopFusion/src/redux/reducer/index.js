import handleCart from './handleCart'
import handleSubmitForm from './handleSubmitForm'
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    handleCart: handleCart,
    handleSubmitForm: handleSubmitForm,
})
export default rootReducers