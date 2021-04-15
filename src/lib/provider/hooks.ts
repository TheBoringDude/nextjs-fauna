import { useContext } from 'react';
import { UserContext } from './authProvider';

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('needs to wrap to <AuthProvider>');
  }
  return context;
};
