import './Hero.css';
import bouquet from '../assets/bloom-it-bouquet.png';

function Hero() {
  return (
    <section className="hero-section">

      {/* Left Content */}
      <div className="hero-content">

        <p className="hero-subtitle">
          ✿ FRESH FLOWERS, MADE WITH LOVE
        </p>

        <h1>
          Beautiful Flowers
          <br />
          for <span>Every Occasion.</span>
        </h1>

        <p className="hero-description">
          Handpicked blooms, stunning arrangements and
          thoughtful bouquets to make every moment special.
        </p>

        <div className="hero-buttons">
          <a href="#categories" className="hero-btn primary-btn">
            SHOP FLOWERS →
          </a>

          <a href="#categories" className="hero-btn secondary-btn">
            EXPLORE COLLECTIONS →
          </a>
        </div>

      </div>

      {/* Right Bouquet Image */}
      <div className="hero-image">
        <img src={bouquet} alt="Pink and ivory rose bouquet by Bloom It" />
      </div>

    </section>
  );
}

export default Hero;