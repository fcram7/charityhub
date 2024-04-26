import { create } from 'zustand';
import { userCredentials } from '../utils/userCredentials';

interface userCredentialsAction {
  // setCredentials: (email: userCredentials["email"], password: userCredentials["password"], confirmPassword?: userCredentials["confirmPassword"], name?: userCredentials["name"]) => void,
  setName: (name: userCredentials["name"]) => void,
  setEmail: (email: userCredentials["email"]) => void,
  setPassword: (password: userCredentials["password"]) => void,
  setConfirmPassword: (confirmPassword: userCredentials["confirmPassword"]) => void,
}

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