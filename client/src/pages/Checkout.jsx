import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Checkout.css';

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  const deliveryCharge = cartTotal >= 499 || cartTotal === 0 ? 0 : 40;
  const grandTotal = cartTotal + deliveryCharge;

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) return;

    setOrderPlaced(true);
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty!</h2>
        <Link to="/flowers">Explore Flowers</Link>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="checkout-success">
        <span>🌸</span>
        <h1>Thank You for Your Order!</h1>
        <p>Your order details have been submitted successfully.</p>
        <p>Payment Method: Cash on Delivery</p>
        <Link to="/flowers">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">

      <div className="checkout-banner">
        <span>ALMOST THERE</span>
        <h1>Checkout</h1>
        <p>Complete your details to receive your beautiful blooms.</p>
      </div>

      <div className="checkout-container">

        <form className="checkout-form" onSubmit={handleSubmit}>

          <section className="checkout-section">
            <h2>01. Customer Information</h2>

            <label>Full Name</label>
            <input type="text" name="name" placeholder="Enter your full name" required />

            <label>Email Address</label>
            <input type="email" name="email" placeholder="Enter your email" required />

            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter 10-digit mobile number"
              pattern="[0-9]{10}"
              maxLength="10"
              required
            />
          </section>

          <section className="checkout-section">
            <h2>02. Delivery Address</h2>

            <label>House / Flat Number</label>
            <input type="text" name="house" placeholder="House or flat number" required />

            <label>Street / Area</label>
            <input type="text" name="street" placeholder="Enter street or area" required />

            <label>City</label>
            <input type="text" name="city" placeholder="Enter city" required />

            <label>State</label>
            <input type="text" name="state" placeholder="Enter state" required />

            <label>PIN Code</label>
            <input
              type="text"
              name="pincode"
              placeholder="6-digit PIN code"
              pattern="[0-9]{6}"
              maxLength="6"
              required
            />
          </section>

          <section className="checkout-section">
            <h2>03. Payment Method</h2>

            <label className="payment-option">
              <input type="radio" name="payment" value="COD" defaultChecked />
              Cash on Delivery
            </label>

            <p>Pay when your flowers are delivered to your doorstep.</p>
          </section>

          <button type="submit" className="place-order-btn">
            Place Order · ₹{grandTotal}
          </button>

        </form>

        <div className="checkout-summary">
          <h2>Your Order</h2>

          {cartItems.map((item) => (
            <div className="checkout-product" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
              </div>

              <strong>₹{item.price * item.quantity}</strong>
            </div>
          ))}

          <div className="checkout-total-row">
            <span>Subtotal</span>
            <span>₹{cartTotal}</span>
          </div>

          <div className="checkout-total-row">
            <span>Delivery</span>
            <span>{deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}</span>
          </div>

          <hr />

          <div className="checkout-grand-total">
            <strong>Total</strong>
            <strong>₹{grandTotal}</strong>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Checkout;