import { create } from 'zustand';

interface userCredentials {
  name: string,
  email: string,
  password: string,
  confirmPassword?: string
}

interface userCredentialsAction {
  setCredentials: (email: userCredentials["email"], password: userCredentials["password"], confirmPassword?: userCredentials["confirmPassword"], name?: userCredentials["name"]) => void
}

export const userAuthStore = create<userCredentials & userCredentialsAction>((set) => ({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  setCredentials: (name, email, password, confirmPassword) => set(() => ({
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  }))
}))