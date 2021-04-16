/*
	User Login API Endpoint
*/

import { createSession } from '@lib/auth';
import { UserAuthModel } from '@lib/auth/model';
import type { NextApiRequest, NextApiResponse } from 'next';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  const user = new UserAuthModel();
  const login = await user.login({ email, password });

  if (login) {
    const token = login.secret;
    console.log(login.secret);
    const u = await user.obtainUser(token, email);

    const username = u.data.username;

    // create a new session
    await createSession(res, { username, email, token });

    res.status(200).json({ login });
  } else {
    res.status(401).json({ login: 'failed' });
  }
};

export default login;
