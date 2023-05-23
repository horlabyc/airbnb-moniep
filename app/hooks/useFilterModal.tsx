import { create } from 'zustand';

interface filterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useFilterModal = create<filterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));


export default useFilterModal;
