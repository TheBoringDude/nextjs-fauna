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
  setSession?: Dispatch<SetStateAction<UserContextProps>>;
};

const NullUser: UserContextProps = {
  user: null,
  isLoading: true,
  isLoggedIn: false
};

const UserContext = createContext<ProviderContextProps>({});

type AuthProviderProps = { children: ReactNode };
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<UserContextProps>(NullUser);
  const value = useMemo(() => ({ session, setSession }), [session, setSession]);

  const { data, error } = useSWR('/api/auth/user');

  useEffect(() => {
    if (data) {
      const sess: UserContextProps = {
        user: data.session,
        isLoading: false,
        isLoggedIn: data.session !== null && data.session !== undefined // should be false if not logged in
      };
      setSession(sess);
    }
    if (error) {
      setSession({
        user: null,
        isLoading: false,
        isLoggedIn: false,
      })
    }
  }, [data]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default AuthProvider;
export { UserContext };
