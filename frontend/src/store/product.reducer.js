export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SET_CART = 'SET_CART'
export const ADD_TO_CART = 'ADD_TO_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const initialState = {
	products: [],
	cart: [],
}

export function productReducer(state = initialState, action) {
	var newState = state
	var products
	var cart
	switch (action.type) {
		case SET_PRODUCTS:
			newState = { ...state, products: action.products }
			break

		case SET_CART:
			newState = { ...state, cart: action.cart }
			break
		case ADD_TO_CART:
			newState = { ...state, cart: [...state.cart, action.product] }
			break
		case REMOVE_FROM_CART:
			cart = state.cart.filter((product) => product._id !== action.productId)
			newState = { ...state, cart }
			break
		case CLEAR_CART:
			newState = { ...state, cart: [] }
			break
		default:
	}
	return newState
}
