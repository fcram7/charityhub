export interface userCredentials {
  name?: string,
  email: string,
  password: string,
  confirmPassword?: string,
}

export interface userCredentialsAction {
  setName: (name: userCredentials["name"]) => void,
  setEmail: (email: userCredentials["email"]) => void,
  setPassword: (password: userCredentials["password"]) => void,
  setConfirmPassword: (confirmPassword: userCredentials["confirmPassword"]) => void,
}

export interface charityInterface {
  createdBy: string,
  charityName: string,
  charityDescription: string,
  currentFunding: number,
  targetFunding: number
}

export interface charityInterfaceAction {
  setCreatedBy: (createdBy: charityInterface["createdBy"]) => void,
  setCharityName: (charityName: charityInterface["charityName"]) => void,
  setCharityDescription: (charityDescription: charityInterface["charityDescription"]) => void,
  setCurrentFunding: (currentFunding: charityInterface["currentFunding"]) => void,
  setTargetFunding: (targetFunding: charityInterface["targetFunding"]) => void,
}