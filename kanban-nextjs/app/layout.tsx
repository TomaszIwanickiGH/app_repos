import './globals.css';
import type { Metadata } from 'next';

import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import Home from './components/Home';

import MenuModal from './components/modals/MenuModal';
import EditTaskModal from './components/modals/EditTaskModal';
import TaskInfoModal from './components/modals/TaskInfoModal';

export const metadata: Metadata = {
  title: 'Kanban Tasks',
  description: 'Simply manage your tasks with kanban',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <div className="flex w-full">
          <Sidebar mode="dark" />
          <div className="flex flex-col w-full">
            <Nav mode="dark" />
            <Home />
          </div>
          <div className="absolute top-0 left-0 w-full">
            <MenuModal />
            <TaskInfoModal />
            <EditTaskModal />
          </div>
        </div>
      </body>
    </html>
  );
}
