import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.billsco.co.nz/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 3000);
  };

  return (
    <div className="bg-matte-black border border-gray-800 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <Mail className="h-6 w-6 text-pure-white" />
        <h3 className="text-xl font-bold text-pure-white">Newsletter</h3>
      </div>
      
      <p className="text-off-white mb-6">
        Subscribe to our newsletter for the latest updates, exclusive offers, and industry insights.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full bg-deep-black text-pure-white px-4 py-3 rounded-lg border border-gray-800 focus:outline-none focus:border-pure-white transition-colors"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="absolute right-2 top-1/2 -translate-y-1/2 button-gradient p-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === 'loading' ? (
              <div className="animate-spin h-5 w-5 border-2 border-pure-white border-t-transparent rounded-full" />
            ) : (
              <ArrowRight className="h-5 w-5 text-pure-white" />
            )}
          </button>
        </div>

        {status === 'success' && (
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle className="h-5 w-5" />
            <span>{message}</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-400">
            <XCircle className="h-5 w-5" />
            <span>{message}</span>
          </div>
        )}

        <p className="text-xs text-off-white">
          By subscribing, you agree to our{' '}
          <a href="/privacy-policy" className="underline hover:text-pure-white">
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  );
};

export default NewsletterSignup;