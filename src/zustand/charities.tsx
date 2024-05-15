import { create } from 'zustand';
import { charityInterface, charityInterfaceAction } from '../utils/stateInterfaces';

export const charitiesAuthStore = create<charityInterface & charityInterfaceAction> ((set) => ({
  createdBy: "",
  charityName: "",
  charityDescription: "",
  currentFunding: 0,
  targetFunding: 0,
  ongoing: true,
  roadmap: {
    initiation: true,
    funding: false,
    fundingTransfer: false,
    finished: false,
  },
  setCreatedBy: (createdBy) => set({ createdBy: createdBy }),
  setCharityName: (charityName) => set({ charityName: charityName }),
  setCharityDescription: (charityDescription) => set({ charityDescription: charityDescription}),
  setCurrentFunding: (currentFunding) => set({ currentFunding: currentFunding }),
  setTargetFunding: (targetFunding) => set({ targetFunding: targetFunding }),
  setOngoing: (ongoing) => set({ ongoing }),
  setRoadmap: (roadmap) => set({ roadmap }),
}));