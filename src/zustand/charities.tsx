import { charityInterface, charityInterfaceAction } from '../utils/stateInterfaces';

import { create } from 'zustand';

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
  setRoadmapFunding: (funding) => set((state) => ({ roadmap: { ...state.roadmap, funding } })),
  setRoadmapFundingTransfer: (fundingTransfer) => set((state) => ({ roadmap: { ...state.roadmap, fundingTransfer } })),
  setRoadmapFinished: (finished) => set((state) => ({ roadmap: { ...state.roadmap, finished } })),
}));