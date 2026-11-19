import './FeaturedProducts.css';

const products = [
  {
    name: 'Blush Pink Rose Bouquet',
    category: 'Premium Bouquet',
    price: 499,
    rating: '★★★★★',
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600',
    tag: 'BESTSELLER',
  },
  {
    name: 'Classic Red Roses',
    category: 'Fresh Roses',
    price: 299,
    rating: '★★★★★',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600',
    tag: 'POPULAR',
  },
  {
    name: 'Sunshine Flower Bouquet',
    category: 'Mixed Flowers',
    price: 399,
    rating: '★★★★★',
    image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=600',
    tag: 'NEW',
  },
  {
    name: 'Elegant White Flowers',
    category: 'Premium Flowers',
    price: 349,
    rating: '★★★★★',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600',
    tag: 'TRENDING',
  },

];

function FeaturedProducts() {
  return (
    <section className="featured-section" id="flowers">

      <div className="featured-heading">
        <span>OUR CUSTOMER FAVOURITES</span>
        <h2>Most Loved Flowers</h2>
        <p>Beautiful blooms, carefully selected for you.</p>
      </div>

      <div className="product-grid">

        {products.map((product, index) => (
          <div className="product-card" key={index}>

            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <span className="product-tag">{product.tag}</span>
              <button className="wishlist-button" aria-label="Add to wishlist">
                ♡
              </button>
            </div>

            <div className="product-details">
              <span className="product-category">
                {product.category}
              </span>

              <h3>{product.name}</h3>

              <div className="product-rating">
                {product.rating}
              </div>

              <div className="product-bottom">
                <span className="product-price">
                  ₹{product.price}
                </span>

                <button className="add-cart-button">
                  ADD TO CART +
                </button>
              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;