export function ShoppingCart() {
	const addedProducts = [
		{
			toyName: 'Colors Cards',
			price: 17,
			inStock: true,
			labels: ['Box game', 'Baby'],
			createdAt: '1631031801022',
			imgUrl: 'cards.jpg',
			msgs: [],
			_id: 'p101',
		},
		{
			toyName: 'Frozen Pazzle',
			price: 23,
			inStock: true,
			labels: ['Puzzle', 'Box game'],
			createdAt: '1631031801222',
			imgUrl: 'frozen.jpg',
			msgs: [],
			_id: 'p102',
		},
		{
			toyName: 'Race Car',
			price: 25,
			inStock: false,
			labels: ['On wheels', 'Battery Powered'],
			createdAt: '1631031801001',
			imgUrl: 'car.jpg',
			msgs: [],
			_id: 'p103',
		},
	]

	const totalPrice = addedProducts.reduce((sum, { price }) => sum + price, 0)

	return (
		<section className="shopping-cart">
			<h1>My Shopping Cart</h1>
			<div className="shopping-cart-items-container">
				<ul className="clean-list shopping-cart-items">
					<li key="list-header" className="list-header">
						<div className="header-product">Product</div>
						<div className="header-price">Price</div>
					</li>
					{addedProducts.map((product) => (
						<li key={product._id} className="shopping-cart-item">
							<div className="product-img">
								<img src={require(`../assets/img/${product.imgUrl}`)} alt="" />
							</div>
							<div className="product-name">{product.toyName}</div>
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
