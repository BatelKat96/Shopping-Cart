import { NavLink } from 'react-router-dom'

export function AppHeader() {
	return (
		<header className="app-header">
			<nav>
				<NavLink to="/">Products</NavLink>
				<NavLink to="/cart">Shopping Cart</NavLink>
			</nav>
			<h1>My App</h1>
		</header>
	)
}
