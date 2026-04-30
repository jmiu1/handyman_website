import { galleryItems } from '@/data/gallery';
import { testimonials } from '@/data/testimonials';
import ContactForm from '@/components/ContactForm';
import ReviewForm from '@/components/ReviewForm';

const business = {
  name: 'WPS Carpentry LLC',
  phone: '(667) 786-8421',
  email: '4sweeneywill@gmail.com',
  serviceArea: 'Eldersburg, Sykesville, Westminster, and nearby Maryland areas'
};

export default function HomePage() {
  return (
    <main>
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Local • Reliable • Honest Estimates</p>
            <h1>Home Improvement transforms your space-and lasts.</h1>
            <p className="lead">
              From bathroom upgrades and custom tile work to kitchens, trim, and finish carpentry,
              we deliver high-quality home improvements across {business.serviceArea}. Every project
              is done with precision, clean workmanship, and attention to detail—so your home looks
              better, functions better, and holds up over time.
            </p>
            <div className="hero-actions">
              <a href="#gallery" className="button primary">Recent Work</a>
              <a href="#reviews" className="button primary">Reviews</a>
              <a href="#contact" className="button primary">Request a Quote</a>
            </div>
            <ul className="trust-list">
              <li>Fast response times</li>
              <li>Clear written estimates</li>
              <li>Respectful in-home service</li>
            </ul>
          </div>

          <div className="hero-card">
            <h2>Need help with a project?</h2>
            <p>Call or email directly, or use the quote form below.</p>
            <p><strong>Business:</strong> {business.name}</p>
            <p><strong>Phone:</strong> <a href={`tel:${business.phone}`}>{business.phone}</a></p>
            <p><strong>Email:</strong> <a href={`mailto:${business.email}`}>{business.email}</a></p>
            <p><strong>Service area:</strong> {business.serviceArea}</p>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Quality home improvement in every room</h2>
            <p>
              We focus on upgrades that improve how your home looks, feels, and functions.
              Whether it’s a bathroom refresh, kitchen update, or detailed finish work,
              every project is completed with care, professionalism, and long-term durability in mind.
            </p>
          </div>

          <div className="cards three-up">
            {[
              {
                title: 'Bathroom & Tile Work',
                text: 'Custom showers, tile installation, fixture upgrades, and full bathroom improvements with clean, modern finishes.'
              },
              {
                title: 'Kitchen & Interior Upgrades',
                text: 'Countertops, sinks, cabinetry updates, backsplashes, and detailed interior improvements that elevate your space.'
              },
              {
                title: 'Finish Carpentry & Detail Work',
                text: 'Trim, railings, doors, and precision finishing that bring everything together with a polished, professional look.'
              }
            ].map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" id="gallery">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Gallery</p>
            <h2>Recent work</h2>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <article className="gallery-card" key={item.title}>
                <div className="gallery-image-wrap">
                  <img src={item.image} alt={item.title} className="gallery-image" />
                </div>
                <div className="gallery-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Reviews</p>
            <h2>What customers say</h2>
          </div>

          <div className="cards three-up">
            {testimonials.map((item) => (
              <article className="card review-card" key={`${item.name}-${item.location}`}>
                <div className="stars" aria-label={`${item.rating} out of 5 stars`}>
                  {'★'.repeat(item.rating)}
                </div>
                <p className="quote">“{item.quote}”</p>
                <p className="reviewer"><strong>{item.name}</strong> • {item.location}</p>
              </article>
            ))}
          </div>

          <div className="split-forms review-layout">
            <div>
              <h3>Submit a review</h3>
              <ReviewForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section alt" id="contact">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Request a quote</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-form">
              <ContactForm />
            </div>

            <aside className="contact-aside">
              <img
                src="/images/wps_carpentry_llc.jpg"
                alt="WPS Carpentry LLC branding"
                className="contact-image"
              />
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
