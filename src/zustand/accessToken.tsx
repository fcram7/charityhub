import { create } from 'zustand';
import { token, tokenAction } from '../utils/stateInterfaces';

export const tokenStore = create<token & tokenAction>((set) => ({
  token: "",
  setToken: (token) => set({ token })
}));