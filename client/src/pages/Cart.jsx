import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } =
    useContext(CartContext);

  const deliveryCharge = cartTotal >= 499 || cartTotal === 0 ? 0 : 40;
  const grandTotal = cartTotal + deliveryCharge;

  return (
    <div className="cart-page">

      <div className="cart-banner">
        <span>YOUR SHOPPING BAG</span>
        <h1>Shopping Cart</h1>
        <p>Beautiful blooms are just a few steps away.</p>
      </div>

      <div className="cart-container">

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <span>🌸</span>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added any flowers yet.</p>
            <Link to="/flowers" className="continue-shopping">
              Explore Flowers
            </Link>
          </div>
        ) : (
          <div className="cart-layout">

            <div className="cart-items">
              <h2>Your Items ({cartItems.length})</h2>

              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>

                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>

                    <div className="quantity-control">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-item"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>

                  <strong>₹{item.price * item.quantity}</strong>

                </div>
              ))}

              <Link to="/flowers" className="back-to-shopping">
                ← Continue Shopping
              </Link>
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>

              <div>
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>

              <div>
                <span>Delivery</span>
                <span>
                  {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}
                </span>
              </div>

              <hr />

              <div className="cart-grand-total">
                <strong>Total</strong>
                <strong>₹{grandTotal}</strong>
              </div>

              <button className="checkout-btn">
                Proceed to Checkout
              </button>

              <p>✿ Fresh Flowers | Beautiful Moments</p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;