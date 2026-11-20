import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartItems } = useContext(CartContext);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <div className="bi-announcement">
        ✿ Fresh Flowers, Beautiful Moments | Free Delivery on Orders Above ₹499
      </div>

      <header className="bi-header">

        <Link to="/" className="bi-logo" onClick={() => setMenuOpen(false)}>
          Bloom <span> It. </span>
          <small>WHERE EVERY BLOOM TELLS A STORY</small>
        </Link>

        <button
          className="bi-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`bi-nav ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <Link to="/flowers" onClick={() => setMenuOpen(false)}>
            Flowers
          </Link>

          <a href="#bouquets">Bouquets</a>
          <a href="#gajras">Gajras & Garlands</a>
          <a href="#occasions">Occasions</a>
          <a href="#offers">Offers</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="bi-icons">
          <button aria-label="Search">⌕</button>
          <button aria-label="Wishlist">♡</button>

          <Link to="/cart" className="cart-icon" aria-label="Shopping cart">
            🛍️
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </Link>
        </div>

      </header>
    </>
  );
}

export default Navbar;