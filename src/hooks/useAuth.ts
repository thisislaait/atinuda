import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuthContext } from '@/context/AuthContext';

const useAuth = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [router, user]);

  return user;
};

export default useAuth;
