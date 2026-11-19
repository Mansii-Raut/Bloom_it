import './ShopByOccasion.css';

const occasions = [
  {
    name: 'Birthday',
    description: 'Make their day extra special.',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600',
  },
  {
    name: 'Anniversary',
    description: 'Celebrate love with beautiful blooms.',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600',
  },
  {
    name: 'Wedding',
    description: 'Flowers for your beautiful beginnings.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600',
  },
  {
    name: 'Congratulations',
    description: 'Celebrate every little achievement.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600',
  },
];

function ShopByOccasion() {
  return (
    <section className="occasion-section">
      <div className="occasion-heading">
        <span>MAKE EVERY MOMENT SPECIAL</span>
        <h2>Shop by Occasion</h2>
        <p>Find the perfect flowers for every celebration.</p>
      </div>

      <div className="occasion-grid">
        {occasions.map((occasion, index) => (
          <div className="occasion-card" key={index}>
            <img src={occasion.image} alt={occasion.name} />

            <div className="occasion-overlay">
              <h3>{occasion.name}</h3>
              <p>{occasion.description}</p>
              <button>EXPLORE COLLECTION →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopByOccasion;