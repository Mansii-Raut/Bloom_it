import { useState } from 'react';
import './AllFlowers.css';

import products from '../data/products';
import ProductCard from '../components/ProductCard';
import FlowerFilters from '../components/FlowerFilters';

function AllFlowers() {

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortOption, setSortOption] = useState('default');

  // Category filter
  const handleCategoryChange = (category) => {
    setSelectedCategories((previousCategories) =>
      previousCategories.includes(category)
        ? previousCategories.filter((item) => item !== category)
        : [...previousCategories, category]
    );
  };

  // Price filter
  const handlePriceChange = (price) => {
    setSelectedPrice((previousPrices) =>
      previousPrices.includes(price)
        ? previousPrices.filter((item) => item !== price)
        : [...previousPrices, price]
    );
  };

  // Colour filter
  const handleColorChange = (color) => {
    setSelectedColors((previousColors) =>
      previousColors.includes(color)
        ? previousColors.filter((item) => item !== color)
        : [...previousColors, color]
    );
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrice([]);
    setSelectedColors([]);
    setSortOption('default');
  };

  // Filter products
  const filteredProducts = products.filter((product) => {

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const matchesPrice =
      selectedPrice.length === 0 ||
      selectedPrice.some((price) => product.price <= price);

    const matchesColor =
      selectedColors.length === 0 ||
      selectedColors.includes(product.color);

    return matchesCategory && matchesPrice && matchesColor;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {

    switch (sortOption) {

      case 'price-low':
        return a.price - b.price;

      case 'price-high':
        return b.price - a.price;

      case 'name-asc':
        return a.name.localeCompare(b.name);

      case 'name-desc':
        return b.name.localeCompare(a.name);

      default:
        return 0;
    }

  });

  return (
    <div className="all-flowers-page">

      {/* Page Banner */}
      <section className="flowers-banner">
        <span>FRESH FLOWERS, BEAUTIFUL MOMENTS</span>
        <h1>Our Flower Collection</h1>
        <p>
          Discover beautiful flowers and thoughtfully crafted
          bouquets for every occasion.
        </p>
      </section>

      {/* Flower Collection */}
      <section className="flowers-container">

        {/* Heading and Sorting */}
        <div className="flowers-page-heading">

          <div>
            <h2>Explore All Flowers</h2>
            <p>Find the perfect blooms for your special moments.</p>
          </div>

          <div className="flowers-sorting">
            <label htmlFor="sort">Sort By:</label>

            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>

        </div>

        {/* Filters and Products */}
        <div className="flowers-content">

          {/* Sidebar Filters */}
          <div className="flowers-filters">

            <FlowerFilters
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
              selectedPrice={selectedPrice}
              onPriceChange={handlePriceChange}
              selectedColors={selectedColors}
              onColorChange={handleColorChange}
            />

            <button
              className="clear-filters-btn"
              onClick={handleClearFilters}
            >
              Clear All Filters
            </button>

          </div>

          {/* Products Section */}
          <div className="flowers-main">

            <div className="flowers-results-count">
              Showing {sortedProducts.length} of {products.length} products
            </div>

            <div className="flowers-products">

              {sortedProducts.length > 0 ? (
                sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))
              ) : (
                <p>No flowers found matching your filters.</p>
              )}

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default AllFlowers;