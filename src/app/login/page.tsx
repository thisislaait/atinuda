/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      router.push('/ticket-payment');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="email" type="email" onChange={handleChange} placeholder="Email" className="input" required />
          <input name="password" type="password" onChange={handleChange} placeholder="Password" className="input" required />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Don’t have an account? <a href="/signup" className="text-blue-600 underline">Create one</a>
        </p>
      </div>
    </div>
  );
}
