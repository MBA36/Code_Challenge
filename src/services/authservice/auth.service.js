import {client} from '../../utils/client';

export const signinUser = async (params) => {
  return client({
    method: 'POST',
    url: `auth/signin`,
    data: {
      username: params.email,
      password: params.password,
    },
  });
};
