import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProductsList } from '../cmps/product-list';
import { productService } from '../services/product.service';
import { addToCart, loadProducts } from '../store/product.actions';

export function ProductIndex() {

	const products = useSelector((storeState) => storeState.productModule.products)
	useEffect(() => {
		loadProducts()
	}, [])


	function onAddToCart(product) {
		console.log('product:', product)
		addToCart(product)
	}

	return <section>
		<h1>Our Products</h1>

		<ProductsList
			products={products}
			onAddToCart={onAddToCart}
		/>



	</section>
}
