import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      if (isSignUp) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-matte-black rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-pure-white">
        {isSignUp ? 'Create Account' : 'Sign In'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-pure-white mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-deep-black text-pure-white border border-gray-700"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-pure-white mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-deep-black text-pure-white border border-gray-700"
            required
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-pure-white text-deep-black py-2 rounded hover:bg-off-white transition-colors"
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>

        <button
          type="button"
          onClick={() => setIsSignUp(!isSignUp)}
          className="w-full text-pure-white hover:text-off-white text-sm"
        >
          {isSignUp ? 'Already have an account? Sign in' : 'Need an account? Sign up'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;