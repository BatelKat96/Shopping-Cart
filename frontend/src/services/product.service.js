import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import data from '../data/product.json'

const STORAGE_KEY = 'product'
const STORAGE_KEY_CART = 'cart'

export const productService = {
	query,
	getById,
	addToCart,
	queryCart,
}
window.cs = productService

async function query() {
	var products = await storageService.query(STORAGE_KEY)
	if (!products || !products.length) products = data
	utilService.saveToStorage(STORAGE_KEY, products)

	// if (filterBy.txt) {
	//     const regex = new RegExp(filterBy.txt, 'i')
	//     cars = cars.filter(car => regex.test(car.vendor) || regex.test(car.description))
	// }
	// if (filterBy.price) {
	//     cars = cars.filter(car => car.price <= filterBy.price)
	// }
	return products
	// return httpService.get(STORAGE_KEY, filterBy)
}

function getById(productId) {
	return storageService.get(STORAGE_KEY, productId)
	// return httpService.get(`product/${productId}`)
}

// Cart functions
async function queryCart() {
	var cart = await storageService.query(STORAGE_KEY_CART)
	if (!cart || !cart.length) cart = []
	utilService.saveToStorage(STORAGE_KEY_CART, cart)
	return cart
	// return httpService.get(STORAGE_KEY, filterBy)
}

function addToCart(product) {
	return storageService.post(STORAGE_KEY_CART, product)
}
