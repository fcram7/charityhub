import axios, { AxiosError, AxiosResponse } from 'axios'
import { ApiEndpoints } from '../global/api-endpoint'
import { userCredentials } from '../utils/userCredentials';

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
})

export const Api = {
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
  }
}