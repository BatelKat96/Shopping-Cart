import { ProductsPreview } from './product-preview'

export function ProductsList({ products, onAddToCart }) {

    return <section className='products-list-section simple-cards-grid'>
        {products.map(product => {

            return <ProductsPreview
                key={product._id}
                product={product}
                onAddToCart={onAddToCart} />
        })}
    </section>

}