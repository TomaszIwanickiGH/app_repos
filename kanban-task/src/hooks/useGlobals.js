import { create } from 'zustand';

const useGlobals = create((set) => ({
  isSidebarOpen: true,
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),

  currentBoard: 'Platform Launch',
  setCurrentBoard: (boardName) => set({ currentBoard: boardName }),
}));

export default useGlobals;
