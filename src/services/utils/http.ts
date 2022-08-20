import { dispatch } from 'app/store';
import axios, { AxiosError } from 'axios';
import { ENVS } from 'configs/Configs.env';
import { ERROR_CODE } from 'constants/errors';
import { deleteAccount } from 'reducer';

const TIMEOUT = 20000;
const instance = axios.create({
  timeout: TIMEOUT,
});

const HEADERS = { 'Content-Type': 'application/json' };

export let accessToken = '';

instance.interceptors.request.use(
  (req) => {
    req.baseURL = `${ENVS.REACT_APP_BASE_API}/api/`;
    let authen = {};
    if (accessToken) {
      authen = { Authorization: `Bearer ${accessToken}` };
    }
    req.headers = {
      ...HEADERS,
      ...req.headers,
      ...authen,
    };
    return req;
  },
  (error) => {
    Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (res) => {
    const result = res?.data?.data;
    const error = !res?.data?.success;
    if (error) {
      return Promise.reject(result.message);
    }
    return Promise.resolve(result);
  },
  (axiosError: AxiosError) => {
    const { response: { data } = {} } = axiosError;

    if (axiosError && !axiosError?.response) {
      throw new Error('Send request API failed');
    }
    if (
      ((data as any).message === ERROR_CODE.Auth_InvalidJWTToken ||
        (data as any).message === 'jwt expired') &&
      accessToken
    ) {
      dispatch(deleteAccount());
    }

    const { message } = (data as any) || {};
    return Promise.reject(message || axiosError);
  },
);

export const setAccessToken = (token: string) => {
  accessToken = token;
};

export default instance;
