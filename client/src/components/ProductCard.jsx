import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './ProductCard.css';

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="product-card">

      <div className="product-card-image">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <span>🌸</span>
        )}
      </div>

      <div className="product-card-details">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-card-bottom">
          <span className="product-price">
            ₹{product.price}
          </span>

          <button
            className={`product-add-btn ${isAdded ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {isAdded ? '✓ ADDED TO CART' : 'ADD TO CART'}
          </button>
        </div>

        {isAdded && (
          <p className="added-message" role="status">
            🌸 Beautiful choice! Added to your cart.
          </p>
        )}

      </div>

    </div>
  );
}

export default ProductCard;