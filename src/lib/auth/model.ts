import { adminClient } from '@lib/fauna';
import { AuthBodyProps, userLogin, userRegister } from './authenticate';

export class UserAuthModel {
  async login({ email, password }: AuthBodyProps) {
    return adminClient.query(userLogin({ email, password })).catch(() => undefined);
  }

  async register({ username, email, password }: AuthBodyProps) {
    return adminClient.query(userRegister({ username, email, password })).catch(() => undefined);
  }
}
