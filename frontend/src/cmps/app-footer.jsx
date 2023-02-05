import { useState } from 'react'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

import { removeFromCart, checkout } from '../store/product.actions'

export function AppFooter() {
	const [isCartShown, setIsCartShown] = useState(false)
	const cart = useSelector((storeState) => storeState.productModule.cart)
	const cartTotal = cart.reduce((acc, car) => acc + car.price, 0)

	async function onCheckout() {
		// try {
		// 	const score = await checkout(cartTotal)
		// 	showSuccessMsg(`Charged, your new score: ${score.toLocaleString()}`)
		// } catch (err) {
		// 	showErrorMsg('Cannot checkout')
		// }
	}

	return (
		<footer className="app-footer-section main-container">
			<div className="app-footer full">
				<p>coffeerights 2023 - Batelkat & Drorka</p>
				{cart.length > 0 && (
					<h5>
						<span>{cart.length}</span> Products in your Cart
					</h5>
				)}
			</div>
		</footer>
	)
}
