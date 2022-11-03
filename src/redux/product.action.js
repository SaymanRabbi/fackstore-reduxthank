import fakeStoreApi from "../apis/fakeStoreApi";
import { actionType } from "./action-type";

export const fetchProducts = () => async (dispatch) => {
    const response = await fakeStoreApi.get("/products");
    dispatch({ type: actionType.FETCH_PRODUCTS, payload: response.data });
}

export const fetchProduct = (id)=> async (dispatch)=>{
    const response = await fakeStoreApi.get(`/products/${id}`);
    dispatch({type:actionType.SELECTED_PRODUCT,payload:response.data})
}
export const setProducts = (products) => {
    return {
      type: actionType.SET_PRODUCTS,
      payload: products,
    };
  };
  
  export const selectedProduct = (product) => {
    return {
      type: actionType.SELECTED_PRODUCT,
      payload: product,
    };
  };
  
  export const removeSelectedProduct = () => {
    return {
      type: actionType.REMOVE_SELECTED_PRODUCT,
    };
  };