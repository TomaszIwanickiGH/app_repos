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
    <div className={`bg-veryDarkGray p-8 flex sm:flex-row flex-col sm:items-start items-center sm:gap-6 gap-16 h-full overflow-x-auto translate duration-300 ${sidebar ? 'lg:max-w-[80vw] max-w-full' : 'max-w-full'}`}>
      {columns.map((column) =>
        column.map((item, index) => {
          return (
            <TasksContainer
              key={index}
              stage={item.name}
              tasks={item.tasks}
            />
          );
        })
      )}
    </div>
  );
};

export default Home;
