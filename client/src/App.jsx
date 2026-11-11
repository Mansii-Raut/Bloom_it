import './App.css';
function App() {
  return (
    <>
      <div className="announcement">
        Welcome to Bloom It! 🌸 Fresh Flowers for Every Occasion
      </div>

      <header className="navbar">
        <div className="logo">Bloom It<span>.</span></div>

        <nav>
          <a href="/">Home</a>
          <a href="#flowers">Flowers</a>
          <a href="#categories">Collections</a>
          <a href="#offers">Offers</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-icons">
          <span>♡</span>
          <span>🛒</span>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="subtitle">A LITTLE HAPPINESS, DELIVERED</p>

            <h1>Flowers That Speak From the Heart.</h1>

            <p>
              Make every moment special with fresh, handpicked blooms.
              Discover beautiful flowers, traditional gajras and
              elegant bouquets for every occasion.
            </p>

            <a href="#categories" className="shop-button">
              SHOP FLOWERS →
            </a>
          </div>
        </section>

        <section className="categories" id="categories">
          <h2>Explore Our Collections</h2>
          <p>Find the perfect blooms for every moment.</p>

          <div className="category-list">
            <div>🌹 <h3>Roses</h3></div>
            <div>🌼 <h3>Traditional Flowers</h3></div>
            <div>💐 <h3>Bouquets</h3></div>
            <div>🌸 <h3>Gajras & Garlands</h3></div>
          </div>
        </section>

      </main>

      <footer id="contact">
        <h2>Bloom It.</h2>
        <p>Where Every Bloom Tells a Story.</p>
        <p>© 2026 Bloom It. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;