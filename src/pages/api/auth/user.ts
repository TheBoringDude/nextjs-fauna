/*
	THIS IS A BASE TEMPLATE FOR CREATING AN API ENDPOINT
*/

import { getSession } from '@lib/auth';
import type { NextApiRequest, NextApiResponse } from 'next';

const api = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession(req);

  if (session) {
    res.status(200).json({ session });
  } else {
    res.status(200).json({ session: null });
  }
};

export default api;
