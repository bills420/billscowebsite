import React, { useState } from 'react';
import { Upload, Loader2 } from 'lucide-react';
import { supabase } from '../../utils/supabaseClient';
import { useAuth } from '../../context/AuthContext';

interface JobApplicationFormProps {
  position: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({
  position,
  onSuccess,
  onCancel
}) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: null as File | null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('Please sign in to submit an application');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Create application record
      const { error } = await supabase.from('job_applications').insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        position,
        resume_url: 'https://quiet-liger-7662dc.netlify.app/',
        user_id: user.id
      });

      if (error) throw error;

      onSuccess?.();
    } catch (err) {
      setError('Failed to submit application. Please try again.');
      console.error('Application submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Full Name</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full p-3 rounded bg-deep-black text-pure-white border border-gray-700"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="w-full p-3 rounded bg-deep-black text-pure-white border border-gray-700"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Phone</label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="w-full p-3 rounded bg-deep-black text-pure-white border border-gray-700"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Resume</label>
        <a 
          href="https://quiet-liger-7662dc.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full p-3 rounded border-2 border-dashed border-gray-700 hover:border-pure-white transition-colors cursor-pointer"
        >
          <Upload className="h-5 w-5 mr-2" />
          Submit Resume Online
        </a>
      </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <div className="flex justify-end gap-4">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 text-off-white hover:text-pure-white transition-colors"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={loading}
          className="button-gradient px-8 py-3 rounded-lg inline-flex items-center disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}
        </button>
      </div>
    </form>
  );
};

export default JobApplicationForm;