import { Key } from 'react';
import { Config } from './config';

export const ApiEndpoints = {
  REGISTER: `${Config.BASE_URL}/register`,
  LOGIN: `${Config.BASE_URL}/login`,
  LOGOUT: `${Config.BASE_URL}/logout`,
  GET_ALL_CHARITIES: `${Config.BASE_URL}/charities`,
  GET_CHARITIES: (email: string) => `${Config.BASE_URL}/charities/${encodeURIComponent(email)}/`,
  GET_ONGOING_CHARITIES: (email: string) => `${Config.BASE_URL}/charities/${encodeURIComponent(email)}/ongoing-charities`,
  GET_INACTIVE_CHARITIES: (email: string) => `${Config.BASE_URL}/charities/${encodeURIComponent(email)}/inactive-charities`,
  GET_ONE_CHARITY: (email: string, charityId: Key) => `${Config.BASE_URL}/charities/${encodeURIComponent(email)}/${charityId}`,
  CREATE_CHARITY: (email: string) => `${Config.BASE_URL}/charities/${encodeURIComponent(email)}/create-charity`,
}