/*
	User Login API Endpoint
*/

import type { NextApiRequest, NextApiResponse } from 'next';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
};

export default login;
