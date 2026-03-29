'use client';

import { useState } from 'react';

export default function ContactForm() {
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
      window.location.href = '/thanks';
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  return (
    <form
      name="quote-request"
      onSubmit={handleSubmit}
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="quote-request" />
      <input type="hidden" name="bot-field" />

      <input name="name" type="text" placeholder="Your name" required />
      <input name="email" type="email" placeholder="Your email" required />
      <input name="phone" type="tel" placeholder="Phone number" required />
      <input name="service" type="text" placeholder="Service needed" />
      <input name="address" type="text" placeholder="Project address" />
      <textarea name="details" placeholder="Tell us about the job" required />

      <button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Request Quote'}
      </button>

      {status === 'error' && <p>Something went wrong. Please try again.</p>}
    </form>
  );
}