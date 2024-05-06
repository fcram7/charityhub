import axios, { AxiosError, AxiosResponse } from 'axios';
import { ApiEndpoints } from '../global/api-endpoint';
import { userCredentials } from '../utils/stateInterfaces';

interface ErrorResponseData {
  message: string;
}

interface AxiosErrorWithResponseData extends AxiosError {
  response?: AxiosResponse<ErrorResponseData>;
}

const instance = axios.create();

instance.interceptors.response.use((response: AxiosResponse) => {
  return response;
}, (error: AxiosErrorWithResponseData) => {
    if (error.response && error.response.data && error.response.status === 400) {
      throw new Error(error.response.data.message);
    }
    return Promise.reject(error.message);
});


export const Api = {
  //USER AUTH
  async register ({ name, email, password }: userCredentials) {
    try {
      const register = await instance.post(ApiEndpoints.REGISTER, {
        name: name,
        email: email,
        password: password,
      });

      return register;
    } catch (err) {
      console.error(err);
      throw err;
    }

  },

  async login ({ email, password }: userCredentials) {
    try {
      const login = await instance.post(ApiEndpoints.LOGIN, {
        email: email,
        password: password,
      }, {
        withCredentials: true,
      });

      return login;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async logout() {
    try {
      const logout = await axios.post(ApiEndpoints.LOGOUT, {}, {
        withCredentials: true
      });

      return logout;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  //CHARITIES DATA
  async getCharities(email: string, token: string) {
    try{
      const getCharities = await axios.get(ApiEndpoints.GET_CHARITIES(email), {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return getCharities;
    } catch (err) {
      console.error(err);
    }
  }
}