import axios from 'axios';

const URL_BASE = 'http://localhost:3001';

export const requestHttp = async (method, endpoint, body = {}, params = {}) => {
  try {
    const url = `${URL_BASE}${endpoint}`;
    const opts = {
      method,
      url,
      data: body,
      params,
    };
    const res = await axios(opts);
    const { data } = res;
    return data;
  } catch (error) {
    throw error;
  }
};
