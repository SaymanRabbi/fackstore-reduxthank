import fakeStoreApi from "../apis/fakeStoreApi";
import { actionType } from "./action-type";

export const fetchProducts = () => async (dispatch) => {
    const response = await fakeStoreApi.get("/products");
    dispatch({ type: actionType.FETCH_PRODUCTS, payload: response.data });
}