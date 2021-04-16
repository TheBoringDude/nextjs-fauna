import { UserProps } from '@appTypes/user';
import { serialize, parse } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { encrypt, decrypt } from '../iron';

const TOKEN_NAME = 'session'; // replace this with the name of your app, if you want to
const MAX_AGE_EXPIRES = 60 * 60 * 12; // expires in '12' hours
const DefaultCookieOpsBase = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production', // will be false if in development,
  sameSite: 'lax',
  path: '/'
};

const parseCookies = (req: NextApiRequest) => {
  if (req.cookies) return req.cookies;

  const cookie = req.headers?.cookie;
  return parse(cookie || '');
};

// creates a new session and store in a cookie
const createSession = async (res: NextApiResponse, data: UserProps) => {
  const token = await encrypt(data);

  const c = {
    expires: new Date(Date.now() + MAX_AGE_EXPIRES * 1000),
    maxAge: MAX_AGE_EXPIRES
  };

  const cookie = serialize(TOKEN_NAME, token, {
    ...DefaultCookieOpsBase,
    ...c
  });

  res.setHeader('Set-Cookie', cookie);
};

// gets the session from the cookie
const getSession = async (req: NextApiRequest) => {
  const cookies = parseCookies(req);
  return await decrypt(cookies?.[TOKEN_NAME]);
};

// removes the session cookie from the browser / header
const removeSession = (res: NextApiResponse) => {
  const cookie = serialize(TOKEN_NAME, '', {
    maxAge: -1,
    path: '/'
  });

  res.setHeader('Set-Cookie', cookie);
};

export { createSession, getSession, removeSession };
