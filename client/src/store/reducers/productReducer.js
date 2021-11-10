import {
	PRODUCT_ADD,
	PRODUCT_EDIT,
	PRODUCT_DELETE,
	PRODUCTS_ALL,
	PRODUCT_GET,
} from '../actions/types';
import { v4 } from 'uuid';
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
						  }
				),
			};
		case PRODUCT_DELETE:
			return {
				...state,
				items: state.items.filter((state) => state._id !== payload.id),
			};
		default:
			return state;
	}
};

export default productReducer;
