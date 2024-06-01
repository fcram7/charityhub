import { Api } from '../network/api';

export const withRefreshToken = async (fn: () => void) => {
  try {
    return await fn();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if(err.response && err.response.status === 403) {
      await Api.newAccessToken();
      return await fn();
    } else {
      throw err;
    }
  }
}