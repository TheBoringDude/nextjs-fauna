/*
	User Register API Endpoint
*/

import { UserAuthModel } from '@lib/auth/model';
import type { NextApiRequest, NextApiResponse } from 'next';

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, email, password } = req.body;

  const user = new UserAuthModel();
  const register = user.register({ username, email, password });

  res.status(200).json({ isRegistered: register ? true : false });
};

export default register;
