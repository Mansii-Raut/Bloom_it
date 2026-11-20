import './FlowerFilters.css';

function FlowerFilters({
  selectedCategories,
  onCategoryChange,
  selectedPrice,
  onPriceChange,
  selectedColors,
  onColorChange
}) {

  const categories = [
    'Roses',
    'Bouquets',
    'Traditional Flowers',
    'Gajras & Garlands',
    'Aesthetic Flowers'
  ];

  const priceRanges = [99, 199, 299, 499];
    const colors = [
  'Pink',
  'Red',
  'White',
  'Yellow',
  'Purple',
  'Mixed'
];
  return (
    <aside className="flower-filters">

      <h3>Filter Flowers</h3>

      <div className="filter-group">
        <h4>Categories</h4>

        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h4>Price Range</h4>

        {priceRanges.map((price) => (
          <label key={price}>
            <input
              type="checkbox"
              checked={selectedPrice.includes(price)}
              onChange={() => onPriceChange(price)}
            />
            Under ₹{price}
          </label>
        ))}
      </div>
         <div className="filter-group">
        <h4>Flower Colour</h4>

        {colors.map((color) => (
          <label key={color}>
            <input
            type="checkbox"
            checked={selectedColors.includes(color)}
            onChange={() => onColorChange(color)}
            />
            {color}
          </label>
        ))}
      </div>
    </aside>
  );
}

export default FlowerFilters;