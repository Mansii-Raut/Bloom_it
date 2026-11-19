import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bi-announcement">
        ✿ Fresh Flowers, Beautiful Moments | Free Delivery on Orders Above ₹499
      </div>

      {/* Navigation */}
      <header className="bi-header">

        <a href="/" className="bi-logo">
          Bloom <span> & Co. </span>
          <small>WHERE EVERY BLOOM TELLS A STORY</small>
        </a>

        <button
          className="bi-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`bi-nav ${menuOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="#categories">Flowers</a>
          <a href="#bouquets">Bouquets</a>
          <a href="#gajras">Gajras & Garlands</a>
          <a href="#occasions">Occasions</a>
          <a href="#offers">Offers</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="bi-icons">
          <button aria-label="Search">⌕</button>
          <button aria-label="Wishlist">♡</button>
          <button aria-label="Shopping bag">♧</button>
        </div>

      </header>
    </>
  );
}

export default Navbar;