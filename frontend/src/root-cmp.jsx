import React from 'react'
import { Routes, Route } from 'react-router'

import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { ProductIndex } from './pages/product-index'
import { ShoppingCart } from './pages/cart'
import { UserMsg } from './cmps/user-msg'

export function RootCmp() {
	return (
		<div>
			<AppHeader />
			<UserMsg />
			<main className="main-container">
				<Routes>
					<Route path="/" element={<ProductIndex />} />
					<Route path="/cart" element={<ShoppingCart />} />
				</Routes>
			</main>
			<AppFooter />
		</div>
	)
}
