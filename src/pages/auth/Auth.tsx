import React from 'react';
import AuthForm from '../../components/auth/AuthForm';

const Auth = () => {
  return (
    <div className="min-h-screen bg-deep-black py-16">
      <div className="container mx-auto px-6">
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;