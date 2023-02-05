import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export function AppHeader() {
	const cart = useSelector((storeState) => storeState.productModule.cart)
	const totalItems = cart.length

	return (
		<header className="app-header-section main-container">
			<div className="app-header  main-container ">
				<h1>My App</h1>
				<nav>
					<NavLink to="/">Products</NavLink>
					<NavLink to="/cart">Shopping Cart ({totalItems})</NavLink>
				</nav>
			</div>
		</header>
	)
}
