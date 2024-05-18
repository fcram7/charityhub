import { ApiEndpoints } from '../global/api-endpoint';
import { charityInterface, userCredentials } from '../utils/stateInterfaces';

import axios, { AxiosError, AxiosResponse } from 'axios';
import { Key } from 'react';

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
  },

  async getOneCharity(email: string, charityId: Key, token: string) {
    try {
      const getOneCharity = await axios.get(ApiEndpoints.GET_ONE_CHARITY(email, charityId), {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return getOneCharity;
    } catch (err) {
      console.error(err)
    }
  },

  async getOngoingCharities(email: string, token: string) {
    try {
      const getOngoingCharities = await axios.get(ApiEndpoints.GET_ONGOING_CHARITIES(email), {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return getOngoingCharities;
    } catch (err) {
      console.error(err);
    }
  },

  async getInactiveCharities(email: string, token: string) {
    try{
      const getInactiveCharities = await axios.get(ApiEndpoints.GET_INACTIVE_CHARITIES(email), {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return getInactiveCharities;
    } catch (err) {
      console.error(err);
    }
  },

  async createCharitiy ({ charityName, charityDescription, currentFunding, targetFunding, ongoing }: charityInterface, email: string, token: string) {
    try {
      const createCharity = await axios.post(ApiEndpoints.CREATE_CHARITY(email), {
        createdBy: email,
        charityName,
        charityDescription,
        currentFunding,
        targetFunding,
        ongoing,
      }, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return createCharity;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async editCharity({ charityName, charityDescription, targetFunding, roadmap }: charityInterface, email: string, charityId: Key, token: string) {
    try {
      const { initiation, funding, fundingTransfer, finished } = roadmap || {};
      const editCharity = await axios.put(ApiEndpoints.EDIT_CHARITY(email, charityId), {
        charityName: charityName,
        charityDescription: charityDescription,
        targetFunding: targetFunding,
        roadmap: {
          initiation: initiation,
          funding: funding,
          fundingTransfer: fundingTransfer,
          finished: finished
        }
      }, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      return editCharity;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async deleteCharity(email: string, charityId: Key, token: string) {
    try{
      const deleteCharity = await axios.delete(ApiEndpoints.DELETE_CHARITY(email, charityId), {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return deleteCharity;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}