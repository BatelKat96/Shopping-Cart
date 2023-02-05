import { useEffect } from 'react';
import { productService } from '../services/product.service';
import { loadProducts } from '../store/product.actions';

export function ProductIndex() {
	useEffect(() => {
		loadProducts()
	}, [])
	{/* {productService.query} */ }
	return <section>
		<p>
			hello from product index
		</p>



	</section>
}
