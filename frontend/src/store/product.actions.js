import { carService } from '../services/car.service.local.js'
import { userService } from '../services/user.service.js'
import { store } from './store.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import {
	ADD_TO_CART,
	CLEAR_CART,
	REMOVE_FROM_CART,
	SET_PRODUCTS,
} from './product.reducer.js'
import { SET_SCORE } from './user.reducer.js'

export async function loadProducts() {
	try {
		const products = await carService.query()
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

export async function checkout(total) {
	try {
		const score = await userService.changeScore(-total)
		store.dispatch({ type: SET_SCORE, score })
		store.dispatch({ type: CLEAR_CART })
		return score
	} catch (err) {
		console.log('CarActions: err in checkout', err)
		throw err
	}
}
