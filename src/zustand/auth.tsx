import { create } from 'zustand';
import { userCredentials, userCredentialsAction } from '../utils/stateInterfaces';

export const userAuthStore = create<userCredentials & userCredentialsAction>((set) => ({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
}));