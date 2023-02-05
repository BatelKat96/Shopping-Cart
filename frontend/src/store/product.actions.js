import { productService } from '../services/product.service'
import { store } from './store.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import {
	ADD_TO_CART,
	CLEAR_CART,
	REMOVE_FROM_CART,
	SET_PRODUCTS,
} from './product.reducer.js'

export async function loadProducts() {
	try {
		const products = await productService.query()
		console.log('Products from DB:', products)
		store.dispatch({
			type: SET_PRODUCTS,
			products,
		})
	} catch (err) {
		console.log('Cannot load products', err)
		throw err
	}
}

export function addToCart(product) {
	store.dispatch({
		type: ADD_TO_CART,
		product,
	})
}

export function removeFromCart(productId) {
	store.dispatch({
		type: REMOVE_FROM_CART,
		productId,
	})
}
