import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProductsList } from '../cmps/product-list';
import { productService } from '../services/product.service';
import { loadProducts } from '../store/product.actions';

export function ProductIndex() {

	const products = useSelector((storeState) => storeState.productModule.products)
	useEffect(() => {
		loadProducts()
	}, [])


	function onAddToCart(id) {
		console.log('id:', id)
	}

	return <section>
		<h1>Our Products</h1>

		<ProductsList
			products={products}
			onAddToCart={onAddToCart}
		/>



	</section>
}
