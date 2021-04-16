import { UserContextProps } from '@appTypes/user';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState
} from 'react';
import useSWR from 'swr';

type ProviderContextProps = {
  session?: UserContextProps;
  setSession: Dispatch<SetStateAction<UserContextProps>>;
};

const UserContext = createContext<ProviderContextProps>({
  session: {
    user: null,
    isLoading: true
  },
  setSession: () => {}
});

type AuthProviderProps = { children: ReactNode };
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<UserContextProps>(null);
  const value = useMemo(() => ({ session, setSession }), [session, setSession]);

  const { data } = useSWR('/api/auth/user');

  useEffect(() => {
    if (data) {
      setSession(data.session);
    }
  }, [data]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default AuthProvider;
export { UserContext };
