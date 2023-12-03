import products from '../products';
import ProductCard from './ProductCard';

export default function Catalog() {
    const cards = products.map(p =>
        <ProductCard key={p.id} product={p} />);

    return <div className="catalog-board">
        {cards}
    </div>;
}
