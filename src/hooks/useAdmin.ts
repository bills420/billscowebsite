import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { isAdmin } from '../utils/admin';

export const useAdmin = () => {
  const { user } = useAuth();
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      if (user) {
        const adminStatus = await isAdmin(user.id);
        setIsAdminUser(adminStatus);
      }
      setLoading(false);
    };

    checkAdmin();
  }, [user]);

  return { isAdmin: isAdminUser, loading };
};