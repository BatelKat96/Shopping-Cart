import { NavLink } from 'react-router-dom'

export function AppHeader() {
	return (
		<header className="app-header-section main-container">
			<div className="app-header  main-container ">

				<h1>My App</h1>
				<nav>
					<NavLink to="/">Products</NavLink>
					<NavLink to="/cart">Shopping Cart</NavLink>
				</nav>
			</div>
		</header>
	)
}
