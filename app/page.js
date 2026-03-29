import { galleryItems } from '@/data/gallery';
import { testimonials } from '@/data/testimonials';
import ContactForm from '@/components/ContactForm';
import ReviewForm from '@/components/ReviewForm';

const business = {
  name: 'Your Handyman Company',
  phone: '(555) 555-5555',
  email: 'quotes@yourdomain.com',
  serviceArea: 'Eldersburg, Sykesville, Westminster, and nearby Maryland areas'
};

export default function HomePage() {
  return (
    <main>
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Local • Reliable • Honest Estimates</p>
            <h1>Handyman work that looks professional and lasts.</h1>
            <p className="lead">
              Replace this text with your friend&apos;s real service area, specialties, and promise.
              Example: drywall repair, trim work, painting, fixture installation, punch-list jobs,
              and small home improvements across {business.serviceArea}.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button primary">Request a Quote</a>
              <a href="#gallery" className="button secondary">View Recent Work</a>
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
            <p className="small-note">
              This version is designed for Netlify&apos;s free tier. The pages can be served 24/7 from
              Netlify&apos;s infrastructure without your friend running his own computer as a server.
            </p>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Built for a local handyman business</h2>
            <p>
              Keep the first version simple: explain what he does, show real photos, publish a few
              approved testimonials, and make it easy for people to ask for a quote.
            </p>
          </div>
          <div className="cards three-up">
            {[
              {
                title: 'Repairs',
                text: 'Drywall patching, trim fixes, caulking, door hardware, and small repairs.'
              },
              {
                title: 'Installations',
                text: 'Light fixtures, ceiling fans, faucets, curtain rods, mirrors, TVs, and fixtures.'
              },
              {
                title: 'Finishing work',
                text: 'Painting, trim, cleanup jobs, punch-list work, and detail-oriented finishing tasks.'
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
            <p>
              Replace these placeholders with real project photos. Put image files in
              <code> /public/gallery </code> and update <code>data/gallery.js</code>.
            </p>
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
            <p>
              I recommend manually approving reviews before they appear on the site. Netlify Forms
              can collect submissions privately, and you can then copy approved reviews into
              <code> data/testimonials.js</code>.
            </p>
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
              <p>
                Customers can submit reviews through the form below. Those submissions go into
                Netlify&apos;s Forms dashboard and can trigger email notifications once configured.
              </p>
              <ReviewForm />
            </div>
            <div className="card aside-card">
              <h3>Recommended review policy</h3>
              <ul>
                <li>Do not auto-publish public comments.</li>
                <li>Collect name, city, rating, and review text.</li>
                <li>After approval, add the review to <code>data/testimonials.js</code>.</li>
                <li>Delete spam directly from the Netlify Forms dashboard.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt" id="contact">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Request a quote</h2>
            <p>
              This form is built for Netlify Forms. After deployment, you can enable email
              notifications in Netlify so your friend gets alerted whenever someone submits.
            </p>
          </div>
          <div className="contact-grid">
            <ContactForm />
            <aside className="card contact-card">
              <h3>What happens when someone submits?</h3>
              <ol>
                <li>The visitor fills out the quote form.</li>
                <li>Netlify captures the submission in the site&apos;s Forms dashboard.</li>
                <li>You can set notification emails from Netlify.</li>
                <li>Your friend replies from his normal email inbox.</li>
              </ol>
              <p className="small-note">
                That is enough for version 1. No paid database is required unless you later want a
                full admin dashboard, analytics on leads, or automatic review publishing.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container footer-note">
          <p>
            Built with Next.js and prepared for Netlify deployment. Replace all placeholder text,
            photos, phone numbers, and email addresses before launch.
          </p>
        </div>
      </section>
    </main>
  );
}
