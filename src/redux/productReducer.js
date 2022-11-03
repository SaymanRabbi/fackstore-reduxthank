import { actionType } from "./action-type";

const initialState = {
    products: [],
}
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SET_PRODUCTS:
            return { ...state, products: payload };
            case actionType.FETCH_PRODUCTS:
      return { ...state, products: payload };
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionType.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case actionType.REMOVE_SELECTED_PRODUCT:
            return {};
    }
}