import { UserContextProps } from '@appTypes/user';

import { createContext, ReactNode, useState } from 'react';

const UserContext = createContext<UserContextProps>({
  user: null,
  isLoading: true
});

type AuthProviderProps = { children: ReactNode };
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserContextProps>(null);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default AuthProvider;
export { UserContext };
