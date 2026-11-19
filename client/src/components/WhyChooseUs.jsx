import './WhyChooseUs.css';

const features = [
  {
    icon: '🌸',
    title: 'Freshness First',
    description: 'Fresh and carefully selected flowers to brighten your special moments.',
  },
  {
    icon: '💐',
    title: 'Beautifully Crafted',
    description: 'Thoughtfully arranged flowers designed to make every bouquet special.',
  },
  {
    icon: '🎁',
    title: 'Flowers for Every Occasion',
    description: 'Find the perfect blooms for birthdays, celebrations and everyday surprises.',
  },
  {
    icon: '❤️',
    title: 'Made with Love',
    description: 'Every arrangement is prepared with attention, creativity and care.',
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-heading">
        <span>THE BLOOM & Co. EXPERIENCE</span>
        <h2>Why Choose Bloom & Co.?</h2>
        <p>Because every flower has a story, and every moment deserves something beautiful.</p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;