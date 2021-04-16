import { adminClient, getClient, q } from '@lib/fauna';
import { AuthBodyProps, userLogin, userLogout, userRegister } from './authenticate';

export class UserAuthModel {
  async login({ email, password }: AuthBodyProps) {
    return adminClient.query(userLogin({ email, password })).catch(() => undefined);
  }

  async register({ username, email, password }: AuthBodyProps) {
    return adminClient.query(userRegister({ username, email, password })).catch(() => undefined);
  }

  async logout(token: string) {
    return getClient(token).query(userLogout());
  }

  async obtainUser(token: string, email: string) {
    return getClient(token)
      .query(q.Get(q.Match(q.Index('users_by_email'), email)))
      .catch((e) => {
        console.error(e);
        return undefined;
      });
  }
}
