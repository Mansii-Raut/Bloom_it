import './Categories.css';

const categories = [
  {
    name: 'Roses',
    description: 'Beautiful roses for every emotion.',
    image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=600',
  },
  {
    name: 'Traditional Flowers',
    description: 'Celebrate traditions with fresh blooms.',
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600',
  },
  {
    name: 'Bouquets',
    description: 'Thoughtfully designed floral arrangements.',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=600',
  },
  {
    name: 'Gajras & Garlands',
    description: 'Traditional floral beauty for special moments.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600',
  },
];

function Categories() {
  return (
    <section className="categories-section" id="categories">

      <div className="categories-heading">
        <span>DISCOVER OUR FLOWERS</span>
        <h2>Explore Our Collections</h2>
        <p>Find something beautiful for every occasion.</p>
      </div>

      <div className="category-grid">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img src={category.image} alt={category.name} />

            <div className="category-overlay">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <a href="#flowers">SHOP NOW →</a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Categories;