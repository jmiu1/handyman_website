'use client';

import { useState } from 'react';

export default function ReviewForm() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setStatus('success');
      window.location.href = '/thanks-review';
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  return (
    <form
      name="review-submission"
      onSubmit={handleSubmit}
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="review-submission" />
      <input type="hidden" name="bot-field" />

      <input name="name" type="text" placeholder="Your name" required />
      <input name="location" type="text" placeholder="City / area" />
      <select name="rating" defaultValue="5" required>
        <option value="5">5 stars</option>
        <option value="4">4 stars</option>
        <option value="3">3 stars</option>
        <option value="2">2 stars</option>
        <option value="1">1 star</option>
      </select>
      <textarea name="review" placeholder="Write your review" required />

      <button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Submit Review'}
      </button>

      {status === 'error' && <p>Something went wrong. Please try again.</p>}
    </form>
  );
}