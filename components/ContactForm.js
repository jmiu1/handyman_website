export default function ContactForm() {
  return (
    <form
      className="form card"
      name="quote-request"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thanks"
    >
      <input type="hidden" name="form-name" value="quote-request" />
      <p className="hidden-field">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>
      <div className="field-grid two-up">
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
      </div>
      <div className="field-grid two-up">
        <label>
          Phone
          <input type="tel" name="phone" />
        </label>
        <label>
          ZIP Code
          <input type="text" name="zipCode" />
        </label>
      </div>
      <label>
        Service needed
        <input type="text" name="service" placeholder="Drywall repair, painting, fixture install..." />
      </label>
      <label>
        Preferred timing
        <input type="text" name="timing" placeholder="This week, next month, flexible, etc." />
      </label>
      <label>
        Project details
        <textarea name="message" rows="6" required placeholder="Describe the job, timeline, and anything important for the estimate." />
      </label>
      <button type="submit" className="button primary">Send quote request</button>
    </form>
  );
}
