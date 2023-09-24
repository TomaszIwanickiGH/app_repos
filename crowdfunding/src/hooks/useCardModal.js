import { create } from 'zustand';

const useCardModal = create((set) => ({
  isOpen: false,
  initialValue: '',
  setValue: (value) => set({ initialValue: value }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCardModal;
