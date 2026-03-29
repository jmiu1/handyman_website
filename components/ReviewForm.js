export default function ReviewForm() {
  return (
    <form
      className="form card"
      name="review-submission"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thanks-review"
    >
      <input type="hidden" name="form-name" value="review-submission" />
      <p className="hidden-field">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>
      <div className="field-grid two-up">
        <label>
          Customer name
          <input type="text" name="name" required />
        </label>
        <label>
          City / area
          <input type="text" name="location" required />
        </label>
      </div>
      <label>
        Rating
        <select name="rating" defaultValue="5">
          <option value="5">5 stars</option>
          <option value="4">4 stars</option>
          <option value="3">3 stars</option>
          <option value="2">2 stars</option>
          <option value="1">1 star</option>
        </select>
      </label>
      <label>
        Review
        <textarea name="quote" rows="5" required placeholder="Tell us about the work that was done and your experience." />
      </label>
      <button type="submit" className="button primary">Submit review</button>
    </form>
  );
}
