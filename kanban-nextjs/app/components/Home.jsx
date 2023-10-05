'use client';

import TasksContainer from './TasksContainer';

import { data } from '../constants';

import useGlobals from '../hooks/useGlobals';

const Home = () => {
  const globals = useGlobals();

  const sidebar = globals.isSidebarOpen;
  const currentBoard = globals.currentBoard;

  const board = data.boards.filter((board) => board.name === currentBoard);
  const columns = board.map((item) => item.columns);

  return (
    <div className={`bg-veryDarkGray p-8 flex sm:flex-row flex-col sm:items-start items-center sm:gap-6 gap-16 custom-media h-[89vh] overflow-y-auto overflow-x-auto ${sidebar ? 'lg:max-w-[80vw] max-w-screen' : 'max-w-screen'}`}>
      {columns.map((column) =>
        column.map((item, index) => (
          <TasksContainer
            key={index}
            stage={item.name}
            tasks={item.tasks}
          />
        ))
      )}
    </div>
  );
};

export default Home;
