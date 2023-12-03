export default function ProductCard(props) {
    const product = props.product;

    return <div className="product-card">
        <h3>{product.name}</h3>
        <div className="price">
            $ {product.price}
        </div>
    </div>
}