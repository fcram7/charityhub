import { Config } from './config';

import { Key } from 'react';

export const ApiEndpoints = {
  REGISTER: `${Config.BASE_URL}/register`,
  LOGIN: `${Config.BASE_URL}/login`,
  LOGOUT: `${Config.BASE_URL}/logout`,
  GET_ALL_CHARITIES: `${Config.BASE_URL}/charities`,
  GET_CHARITY_DETAIL: (charityId: Key) => `${Config.BASE_URL}/charities/${charityId}`,
  GET_CHARITIES: (email: string) => `${Config.BASE_URL}/charities/${encodeURIComponent(email)}/`,
  GET_ONGOING_CHARITIES: (email: string) => `${Config.BASE_URL}/charities/${encodeURIComponent(email)}/ongoing-charities`,
  GET_INACTIVE_CHARITIES: (email: string) => `${Config.BASE_URL}/charities/${encodeURIComponent(email)}/inactive-charities`,
  GET_ONE_CHARITY: (email: string, charityId: Key) => `${Config.BASE_URL}/charities/${encodeURIComponent(email)}/${charityId}`,
  CREATE_CHARITY: (email: string) => `${Config.BASE_URL}/charities/${encodeURIComponent(email)}/create-charity`,
  EDIT_CHARITY: (email: string, charityId: Key) => `${Config.BASE_URL}/charities/${encodeURIComponent(email)}/${charityId}/edit-charity`,
  DELETE_CHARITY: (email: string, charityId: Key) => `${Config.BASE_URL}/charities/${encodeURIComponent(email)}/${charityId}/delete-charity`,
}