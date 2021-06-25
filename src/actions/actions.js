import * as api from '../api/api'

 export const getProducts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchProducts();
      dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const detailProduct = (_id) => async (dispatch) => {
    try {
      const { data } = await api.fetchDetailProduct(_id);
      dispatch({ type: 'FETCH_PRODUCT', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };