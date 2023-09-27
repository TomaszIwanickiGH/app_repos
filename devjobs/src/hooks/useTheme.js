import { create } from 'zustand';

const useTheme = create((set) => ({
  mode: 'light',
  toggleMode: (currentMode) => set({ mode: currentMode === 'light' ? 'dark' : 'light' }),
}));

export default useTheme;
