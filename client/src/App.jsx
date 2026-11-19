import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
         <Categories />
          <FeaturedProducts />
            <WhyChooseUs />
      </main>

      <footer id="contact">
        <h2>Bloom & Co. </h2>
        <p>Where Every Bloom Tells a Story.</p>
        <p>© 2026 Bloom It. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;