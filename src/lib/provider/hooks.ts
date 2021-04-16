import { useContext } from 'react';
import { UserContext } from './authProvider';

const useSessionContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('needs to wrap to <AuthProvider>');
  }
  return context;
};

const useUser = () => {
  return useSessionContext().session;
};

export { useSessionContext, useUser };
