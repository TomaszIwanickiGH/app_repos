import { create } from 'zustand';

const useGlobals = create((set) => ({
  isSidebarOpen: true,
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),

  currentBoard: 'Platform Launch',
  setCurrentBoard: (boardName) => set({ currentBoard: boardName }),

  chosenTask: {
    title: '',
    description: '',
    status: '',
    subtasks: [],
    completedSubtasks: 0,
  },
  setChosenTask: (title, description, status, subtasks, completedSubtasks) =>
    set({
      chosenTask: {
        title: title,
        description: description,
        status: status,
        subtasks: subtasks,
        completedSubtasks: completedSubtasks,
      },
    }),
}));

export default useGlobals;
