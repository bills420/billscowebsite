import React, { useState } from 'react';
import { sendEmail } from '../../utils/email';
import { useLocation } from 'react-router-dom';

const ContactForm = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isQuote = searchParams.get('type') === 'quote';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const success = await sendEmail({
      ...formData,
      subject: isQuote ? 'New Quote Request' : 'New Contact Form Submission'
    });

    setStatus(success ? 'success' : 'error');
    if (success) {
      setFormData({ name: '', email: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full p-2 rounded bg-matte-black text-pure-white border border-gray-700"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full p-2 rounded bg-matte-black text-pure-white border border-gray-700"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Service</label>
        <select
          value={formData.service}
          onChange={(e) => setFormData({...formData, service: e.target.value})}
          className="w-full p-2 rounded bg-matte-black text-pure-white border border-gray-700"
        >
          <option value="">Select a service</option>
          <option value="Web Development">Web Development</option>
          <option value="Labour">Labour</option>
          <option value="Beautification">Beautification</option>
          <option value="Music">Music</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          required
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full p-2 rounded bg-matte-black text-pure-white border border-gray-700"
          rows={4}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full bg-pure-white text-deep-black py-3 rounded hover:bg-off-white transition-colors ${
          status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {status === 'sending' ? 'Sending...' : isQuote ? 'Get Quote' : 'Send Message'}
      </button>

      {status === 'success' && (
        <div className="text-green-500 text-center">
          Message sent successfully!
        </div>
      )}

      {status === 'error' && (
        <div className="text-red-500 text-center">
          Failed to send message. Please try again.
        </div>
      )}
    </form>
  );
};

export default ContactForm;