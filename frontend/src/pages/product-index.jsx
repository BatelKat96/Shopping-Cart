import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ProductsList } from '../cmps/product-list'
import { productService } from '../services/product.service'
import { addToCart, loadProducts } from '../store/product.actions'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

export function ProductIndex() {
	const products = useSelector(
		(storeState) => storeState.productModule.products
	)
	useEffect(() => {
		loadProducts()
	}, [])

	function onAddToCart(product) {
		try {
			addToCart(product)
			showSuccessMsg('Product added successfully!')
		} catch (err) {
			showErrorMsg('Something went wrong, please try again')
		}
	}

	return (
		<section>
			<h1>Our Products</h1>

			<ProductsList products={products} onAddToCart={onAddToCart} />
		</section>
	)
}
