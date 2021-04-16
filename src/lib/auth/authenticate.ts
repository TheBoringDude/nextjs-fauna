import { q } from '@lib/fauna';

const { Login, Match, Index, Create, Collection, Logout } = q;
type AuthBodyProps = { email: string; password: string; username?: string };

const userLogin = ({ email, password }: AuthBodyProps) => {
  return Login(Match(Index('users_by_email'), email), { password: password });
};

const userRegister = ({ username, email, password }: AuthBodyProps) => {
  return Create(Collection('users'), {
    credentials: { password: password },
    data: {
      username: username,
      email: email
    }
  });
};

const userLogout = () => {
  return Logout(true);
};

export { userLogin, userRegister, userLogout };
export type { AuthBodyProps };
