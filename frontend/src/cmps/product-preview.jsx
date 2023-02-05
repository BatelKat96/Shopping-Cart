export function ProductsPreview({ product, onAddToCart }) {
    const { productName, price, imgUrl, _id } = product
    return <section className='products-preview-section'>
        {!imgUrl && <img src={`https://robohash.org/${productName}?set=set2`} alt="" />}
        {imgUrl && <img src={require(`../assets/img/${imgUrl}`)} alt="" />}
        <h3>{productName}</h3>
        <p>{price}</p>
        <button onClick={() => { onAddToCart(_id) }}> </button>

    </section>

}