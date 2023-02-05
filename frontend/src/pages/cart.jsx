import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadCart } from '../store/product.actions'

export function ShoppingCart() {
	const cart = useSelector((storeState) => storeState.productModule.cart)

	useEffect(() => {
		loadCart()
	}, [])

	const totalPrice = cart.reduce((sum, { price }) => sum + price, 0)
	const totalItems = cart.length

	return (
		<section className="shopping-cart">
			<h1>
				My Shopping Cart (<span>{totalItems}</span> items)
			</h1>
			<div className="shopping-cart-items-container">
				<ul className="clean-list shopping-cart-items">
					<li key="list-header" className="list-header">
						<div className="header-product">Product</div>
						<div className="header-price">Price</div>
					</li>
					{cart.map((product) => (
						<li key={product._id} className="shopping-cart-item">
							<div className="product-img">
								<img src={product.imgUrl} alt="" />
							</div>
							<div className="product-name">{product.productName}</div>
							<div className="product-price">${product.price}</div>
						</li>
					))}
					<div className="products-total">
						<p>
							Total: $<span>{totalPrice}</span>
						</p>
					</div>
				</ul>
			</div>
		</section>
	)
}
