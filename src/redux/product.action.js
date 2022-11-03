import fakeStoreApi from "../apis/fakeStoreApi";
import { actionType } from "./action-type";

export const fetchProducts = () => async (dispatch) => {
    const response = await fakeStoreApi.get("/products");
    dispatch({ type: actionType.FETCH_PRODUCTS, payload: response.data });
}

export const fetchProduc = (id)=> async (dispatch)=>{
    const response = await fakeStoreApi.get(`/products/${id}`);
    dispatch({type:actionType.SELECTED_PRODUCT,payload:response.data})
}