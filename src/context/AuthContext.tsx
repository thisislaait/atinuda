'use client';

import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '@/firebase/config';
import { doc, getDoc } from 'firebase/firestore';

interface ExtendedUser {
  uid: string;
  email: string | null;
  firstName?: string;
  lastName?: string;
  company?: string;
}

interface AuthContextType {
  user: ExtendedUser | null;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthModalOpen: false,
  openAuthModal: () => {},
  closeAuthModal: () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<ExtendedUser | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        let extendedUser: ExtendedUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
        };

        try {
          const userRef = doc(db, 'users', firebaseUser.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const userData = userSnap.data();
            extendedUser = {
              ...extendedUser,
              firstName: userData.firstName,
              lastName: userData.lastName,
              company: userData.company,
            };
          }
        } catch (error) {
          console.error('Error fetching Firestore user:', error);
        }

        setUser(extendedUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthModalOpen,
        openAuthModal: () => setIsAuthModalOpen(true),
        closeAuthModal: () => setIsAuthModalOpen(false),
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Optional convenience hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
