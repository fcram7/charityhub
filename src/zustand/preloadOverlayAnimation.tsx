import { preloadAnimationInterface, preloadAnimationInterfaceAction } from '../utils/stateInterfaces';

import { create } from 'zustand';

export const preLoadOverlayStore = create<preloadAnimationInterface & preloadAnimationInterfaceAction>((set) => ({
  websiteOpen: true,
  headerMenuClicked: true,
  setWebsiteOpen: (websiteOpen) => set({ websiteOpen: websiteOpen }),
  setHeaderMenuClicked: (headerMenuClicked) => set({ headerMenuClicked: headerMenuClicked })
}))