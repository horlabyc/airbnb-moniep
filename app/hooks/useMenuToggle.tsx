import { create } from 'zustand';

interface MenuToggleStore {
  isOpen: boolean;
  onToggle: () => void;
}

const useMenuToggle = create<MenuToggleStore>((set) => ({
  isOpen: false,
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));


export default useMenuToggle;
