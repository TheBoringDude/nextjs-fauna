/*
	User Logout API Endpoint
*/

import { getSession, removeSession } from '@lib/auth';
import { UserAuthModel } from '@lib/auth/model';
import type { NextApiRequest, NextApiResponse } from 'next';

const api = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = await getSession(req);

  // clear session cookie
  removeSession(res);

  const user = new UserAuthModel();
  const logout = await user.logout(token);

  res.status(200).json({ message: 'User logged out.' });
};

export default api;
