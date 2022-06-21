/* eslint-disable no-underscore-dangle */
import { PRODUCT_EDIT, PRODUCT_DELETE, PRODUCTS_ALL } from '../actions/types';

const initialState = {
  items: [],
};
const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS_ALL:
      return { ...state, items: payload };
    case PRODUCT_EDIT:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id !== payload.id
            ? item
            : {
                ...item,
                name: payload.formData.name,
                description: payload.formData.description,
                image: payload.formData.image,
                price: payload.formData.price,
              },
        ),
      };
    case PRODUCT_DELETE:
      return {
        ...state,
        items: state.items.filter((s) => s._id !== payload.id),
      };
    default:
      return state;
  }
};

export default productReducer;
