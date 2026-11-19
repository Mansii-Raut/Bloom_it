import './CustomBouquet.css';

function CustomBouquet() {
  return (
    <section className="custom-bouquet-section">
      <div className="custom-bouquet-content">
        <span>MADE JUST FOR YOU</span>

        <h2>Your Flowers,<br />Your Way.</h2>

        <p>
          Create a bouquet that tells your story.
          Choose your favourite flowers, colours
          and make every arrangement uniquely yours.
        </p>

        <button className="custom-bouquet-btn">
          CREATE YOUR BOUQUET →
        </button>
      </div>

      <div className="custom-bouquet-image">
        <img
          src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800"
          alt="Beautiful floral arrangement"
        />
      </div>
    </section>
  );
}

export default CustomBouquet;