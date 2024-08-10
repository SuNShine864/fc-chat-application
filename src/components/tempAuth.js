// src/components/Auth.js
import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Auth = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const signIn = () => {
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");
    signInWithEmailAndPassword(email, password);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return user ? <p>Welcome {user.email}</p> : <button onClick={signIn}>Sign In</button>;
};

export default Auth;
