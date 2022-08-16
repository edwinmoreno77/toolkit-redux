import { restServerApi } from "../../../api/restServer";
import { setProducts, startLoadingProducts } from "./restServerSlice";


export const getProducts = (limit = 10) => {

    return async (dispatch, getState) => {
        dispatch(startLoadingProducts());

        const { data } = await restServerApi.get(`/api/products?limit=${limit}&from=0`);

        dispatch(setProducts({ products: data.products, limit: limit }));

    }

}