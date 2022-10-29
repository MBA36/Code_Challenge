import {client} from '../../utils/client';
import {getAuth} from '../../utils/storage';


export const fetchArticles = async (page) => {
  const token = await getAuth();
  return client.get(`articles?page=${page}`, {
    headers: {Authorization: `Bearer ${token}`},
  });
};
