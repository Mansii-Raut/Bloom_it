import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChooseUs from './components/WhyChooseUs';
import ShopByOccasion from './components/ShopByOccasion';
import CustomBouquet from './components/CustomBouquet';
import FestivalOffers from './components/FestivalOffers';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';

import AllFlowers from './pages/AllFlowers';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <ShopByOccasion />
      <CustomBouquet />
      <FestivalOffers />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flowers" element={<AllFlowers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer id="contact">
          <h2>Bloom It</h2>
          <p>Where Every Bloom Tells a Story.</p>
          <p>© 2026 Bloom It. All rights reserved.</p>
        </footer>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;