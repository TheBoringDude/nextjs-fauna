import faunadb from 'faunadb';

const q = faunadb.query;

const getClient = (secret: string) => {
  return new faunadb.Client({ secret });
};

const adminClient = getClient(process.env.FAUNADB_SECRET_KEY);

export { q, getClient, adminClient };
