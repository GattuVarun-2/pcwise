function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div>
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.detail}</p>
      </div>
      <strong>{product.price}</strong>
    </article>
  );
}
export default ProductCard;
