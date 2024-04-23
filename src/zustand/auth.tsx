import { create } from 'zustand';

interface userCredentials {
  email: string,
  password: string,
  confirmPassword?: string
}

interface userCredentialsAction {
  // setEmail: (email: userCredentials["email"]) => void,
  // setPassword: (password: userCredentials["password"]) => void,
  // setConfirmPassword: (confirmPassword: userCredentials["confirmPassword"]) => void
  setCredentials: (email: userCredentials["email"], password: userCredentials["password"], confirmPassword?: userCredentials["confirmPassword"]) => void
}

export const userAuthStore = create<userCredentials & userCredentialsAction>((set) => ({
  email: "",
  password: "",
  confirmPassword: "",
  setCredentials: (email, password, confirmPassword) => set(() => ({
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  }))
}))