/*
	User Login API Endpoint
*/

import { UserProps } from '@appTypes/user';
import { createSession } from '@lib/auth';
import { UserAuthModel } from '@lib/auth/model';
import type { NextApiRequest, NextApiResponse } from 'next';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  const user = new UserAuthModel();
  const login = await user.login({ email, password });

  if (login) {
    const token = login.secret;
    const u = await user.obtainUser(token, email);

    const username = u.data.username;
    const userData = <UserProps>{
      username,
      email,
      token
    };

    // create a new session
    await createSession(res, userData);

    res.status(200).json({ userData });
  } else {
    res.status(401).json({ login: 'failed' });
  }
};

export default login;
