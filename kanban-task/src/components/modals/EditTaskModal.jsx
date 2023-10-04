import { useState } from 'react';

import useGlobals from '../../hooks/useGlobals';
import useEditTaskModal from '../../hooks/useEditTaskModal';
import MenuActions from '../MenuActions';
import Subtask from '../Subtask';

const TaskInfoModal = () => {
  const globals = useGlobals();
  const editTaskModal = useEditTaskModal();

  const [toggleMenu, setToggleMenu] = useState(false);
  const { title, description, status, subtasks, completedSubtasks } = globals.chosenTask;

  if (!editTaskModal.isOpen) {
    return null;
  }

  return (
    <div className="relative bg-neutral-800/70 h-screen">
      <div className={`absolute top-[50%] translate-y-[-50%] right-0 left-0 m-auto max-w-[500px] px-8`}>
        <div className="bg-darkGray rounded-md flex flex-col gap-6 px-6 py-8">
          <h2 className="font-bold text-white">Edit Task</h2>
          <div className="flex justify-between items-center gap-4">
            <h2 className="text-white font-bold">{title}</h2>
            <MenuActions
              editMesage="Edit Task"
              deleteMessage="Delete Task"
              toggle={toggleMenu}
              handleToggle={() => setToggleMenu((prev) => !prev)}
              handleClose={() => setToggleMenu(false)}
            />
          </div>
          <p className="text-mediumGray text-[15px]">{description ? description : 'No description for this task.'}</p>
          <h3 className="text-white font-semibold text-[15px] tracking-wider">
            Subtasksdd ({completedSubtasks} of {subtasks.length})
          </h3>
          {subtasks.map((task, index) => (
            <Subtask
              key={index}
              isCompleted={task.isCompleted}
              title={task.title}
            />
          ))}
          <div className="flex flex-col gap-8">
            <p className="text-mediumGray">
              Current status: <span className="text-white font-bold tracking-wider">{status ? status : 'Todo'}</span>
            </p>
            <button
              className="px-5 py-3 bg-mainPurple hover:bg-lightPurple font-semibold rounded-full text-white"
              onClick={() => editTaskModal.onClose()}
            >
              Close Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInfoModal;
