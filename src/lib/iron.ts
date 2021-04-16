import Iron from '@hapi/iron';

const encrypt = async (data) => {
  return data && Iron.seal(data, process.env.SECRET_TOKEN, Iron.defaults);
};

const decrypt = async (data) => {
  return data && Iron.unseal(data, process.env.SECRET_TOKEN, Iron.defaults);
};

export { encrypt, decrypt };
