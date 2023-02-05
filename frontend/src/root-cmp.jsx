import React from 'react'
import { Routes, Route } from 'react-router'

import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { ProductIndex } from './pages/product-index'
import { ShoppingCart } from './pages/cart'

export function RootCmp() {
	return (
		<div>
			<AppHeader />
			<main>
				<Routes>
					<Route path="/" element={<ProductIndex />} />
					<Route path="/cart" element={<ShoppingCart />} />
				</Routes>
			</main>
			<AppFooter />
		</div>
	)
}
