import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { sendEmail } from '../../utils/email';

const SignupPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const hasShown = sessionStorage.getItem('popupShown');
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('popupShown', 'true');
      }, 20000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await sendEmail({
      ...formData,
      subject: 'New Service Request from Popup'
    });

    if (success) {
      setIsVisible(false);
      alert('Thank you for your interest! We will contact you soon.');
    } else {
      alert('Failed to send request. Please try again.');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-deep-black/80 flex items-center justify-center p-6 z-[100]">
      <div className="bg-matte-black rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-off-white hover:text-pure-white"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-pure-white">Get Started Today!</h2>
        <p className="text-off-white mb-6">
          Tell us about your project and we'll help you bring it to life.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-pure-white">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-2 rounded bg-deep-black text-pure-white border border-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-pure-white">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-2 rounded bg-deep-black text-pure-white border border-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-pure-white">Service Needed</label>
            <select
              required
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              className="w-full p-2 rounded bg-deep-black text-pure-white border border-gray-700"
            >
              <option value="">Select a service</option>
              <option value="Web Development">Web Development</option>
              <option value="Labour">Labour</option>
              <option value="Beautification">Beautification</option>
              <option value="Music">Music</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-pure-white">Message</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full p-2 rounded bg-deep-black text-pure-white border border-gray-700"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full button-gradient text-pure-white py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPopup;