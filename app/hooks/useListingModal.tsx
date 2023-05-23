import { create } from 'zustand';

interface listingModalStore {
  isOpen: boolean;
  currentListing: any
  onOpen: (listing: any) => void;
  onClose: () => void;
}

const useListingModal = create<listingModalStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  currentListing: null,
  onOpen: (currentListing) => set(() => ({ currentListing, isOpen: true }))
}));


export default useListingModal;
