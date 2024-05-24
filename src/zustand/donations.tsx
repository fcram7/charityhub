import { donationInterface, donationInterfaceAction } from '../utils/stateInterfaces';

import { create } from 'zustand';

export const donationStore = create<donationInterface & donationInterfaceAction> ((set) => ({
  donator: "",
  donationAmount: 0,
  setDonator: (donator) => set({ donator: donator}),
  setDonationAmount: (donationAmount) => set({ donationAmount: donationAmount }),
}));