import './FestivalOffers.css';

function FestivalOffers() {
  return (
    <section className="festival-offers">
      <div className="festival-heading">
        <span>CELEBRATE WITH BLOOMS</span>
        <h2>Flowers for Every Celebration</h2>
        <p>
          Make every festival more beautiful with flowers
          thoughtfully arranged for your special moments.
        </p>
      </div>

      <div className="festival-grid">
        <div className="festival-card">
          <h3>Diwali Specials</h3>
          <p>Brighten your celebrations with beautiful flowers.</p>
          <span>EXPLORE COLLECTION →</span>
        </div>

        <div className="festival-card">
          <h3>Ganesh Chaturthi</h3>
          <p>Traditional flowers and garlands for auspicious moments.</p>
          <span>EXPLORE COLLECTION →</span>
        </div>

        <div className="festival-card">
          <h3>Wedding Season</h3>
          <p>Elegant floral arrangements for unforgettable occasions.</p>
          <span>EXPLORE COLLECTION →</span>
        </div>
      </div>
    </section>
  );
}

export default FestivalOffers;