import TasksContainer from './TasksContainer';

import { data } from '../constants';

import useGlobals from '../hooks/useGlobals';

const Home = () => {
  const globals = useGlobals();
  const currentBoard = globals.currentBoard;

  const board = data.boards.filter((board) => board.name === currentBoard);
  const columns = board.map((item) => item.columns);

  return (
    <div className="bg-veryDarkGray p-8 flex gap-6 3xl:h-screen h-[89vh] overflow-y-scroll">
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
