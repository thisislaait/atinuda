// src/components/AuthModal.tsx
'use client';

import { useAuth } from '@/hooks/useAuth';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/config';

const AuthModal = () => {
  const { isAuthModalOpen, closeAuthModal } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
    setLoading(true);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      closeAuthModal();
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-[9999]">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-lg p-8 w-full max-w-md shadow-xl"
      >
        <h2 className="text-xl font-bold mb-4 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleAuth}
          className="w-full bg-[#ff7f41] text-white py-2 rounded hover:bg-[#e66a30] transition"
          disabled={loading}
        >
          {loading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
        </button>

        <p className="text-sm text-center mt-4">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            className="text-[#ff7f41] underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
        <button
          className="mt-6 text-sm text-gray-600 hover:underline block mx-auto"
          onClick={closeAuthModal}
        >
          Cancel
        </button>
      </motion.div>
    </div>
  );
};

export default AuthModal;
