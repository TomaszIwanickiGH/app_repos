import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

import useTheme from './hooks/useTheme';

import MenuModal from './components/modals/MenuModal';
import TaskInfoModal from './components/modals/TaskInfoModal';
import EditTaskModal from './components/modals/EditTaskModal';

const App = () => {
  const theme = useTheme();

  return (
    <div className="flex">
      <Sidebar mode={theme.mode} />
      <div className="flex flex-col w-full">
        <Nav mode={theme.mode} />
        <Home mode={theme.mode} />
      </div>
      <div className="absolute top-0 left-0 w-full">
        <MenuModal />
        <TaskInfoModal />
        <EditTaskModal />
      </div>
    </div>
  );
};

export default App;
