import { Config } from './config';

export const ApiEndpoints = {
  REGISTER: `${Config.BASE_URL}/register`,
  LOGIN: `${Config.BASE_URL}/login`,
  LOGOUT: `${Config.BASE_URL}/logout`,
  GET_ALL_CHARITIES: `${Config.BASE_URL}/charities`,
  GET_CHARITIES: (email: string) => `${Config.BASE_URL}/charities/${encodeURIComponent(email)}/`
}