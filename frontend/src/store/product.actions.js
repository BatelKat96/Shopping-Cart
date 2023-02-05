import { productService } from '../services/product.service'
import { store } from './store.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import {
	SET_CART,
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

// Cart actions

export async function loadCart() {
	try {
		const cart = await productService.queryCart()
		console.log('cart from DB:', cart)
		store.dispatch({
			type: SET_CART,
			cart,
		})
	} catch (err) {
		console.log('Cannot load cart', err)
		throw err
	}
}

export async function addToCart(product) {
	console.log('product from action:', product)

	try {
		const cart = await productService.addToCart(product)
		console.log('cart', cart)

		store.dispatch({
			type: ADD_TO_CART,
			product,
		})
	} catch (err) {
		console.log('Cannot add product', err)
		throw err
	}
}

export function removeFromCart(productId) {
	store.dispatch({
		type: REMOVE_FROM_CART,
		productId,
	})
}
