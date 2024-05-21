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

export interface roadmap {
  initiation?: boolean,
  funding?: boolean,
  fundingTransfer?: boolean,
  finished?: boolean
}

export interface charityInterface {
  createdBy?: string,
  charityName?: string,
  charityDescription?: string,
  charityLocation?: string,
  currentFunding?: number,
  targetFunding?: number,
  ongoing?: boolean,
  roadmap?: roadmap
}

export interface charityInterfaceAction {
  setCreatedBy: (createdBy: charityInterface["createdBy"]) => void,
  setCharityName: (charityName: charityInterface["charityName"]) => void,
  setCharityDescription: (charityDescription: charityInterface["charityDescription"]) => void,
  setCharityLocation: (charityLocation: charityInterface["charityLocation"]) => void,
  setCurrentFunding: (currentFunding: charityInterface["currentFunding"]) => void,
  setTargetFunding: (targetFunding: charityInterface["targetFunding"]) => void,
  setOngoing: (ongoing: charityInterface["ongoing"]) => void,
  // setRoadmap: (roadmap: charityInterface["roadmap"]) => void,
  setRoadmapFunding: (funding: roadmap["funding"]) => void,
  setRoadmapFundingTransfer: (fundingTransfer: roadmap["fundingTransfer"]) => void,
  setRoadmapFinished: (finished: roadmap["finished"]) => void,
}