/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/signup/page.tsx
'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/checkout'); // Redirect to payment page after signup
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={handleSignup} className="space-y-4 max-w-sm w-full">
        <h2 className="text-xl font-semibold text-center">Create an Account</h2>
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full border px-4 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full border px-4 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#ff7f41] text-white px-4 py-2 w-full uppercase"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
