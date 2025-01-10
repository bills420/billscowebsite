import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (credentials.username === 'bills' && credentials.password === '420WEEDman') {
      try {
        await signIn('info@billsco.co.nz', '420WEEDman');
        navigate('/admin/dashboard');
      } catch (err) {
        setError('Failed to sign in');
      }
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-deep-black flex items-center justify-center p-6">
      <div className="bg-matte-black p-8 rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-pure-white">Admin Login</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-pure-white">Username</label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              className="w-full p-2 rounded bg-deep-black text-pure-white border border-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-pure-white">Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              className="w-full p-2 rounded bg-deep-black text-pure-white border border-gray-700"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full button-gradient text-pure-white py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;