import { images } from '../../constants';

import useGlobals from '../../hooks/useGlobals';
import useTaskInfoModal from '../../hooks/useTaskInfoModal';

const TaskInfoModal = () => {
  const globals = useGlobals();
  const taskInfoModal = useTaskInfoModal();

  const { title, description, status, subtasks, completedSubtasks } = globals.chosenTask;

  if (!taskInfoModal.isOpen) {
    return null;
  }

  return (
    <div className="relative bg-neutral-800/70 h-screen">
      <div className={`absolute ${description ? 'top-[20px]' : 'top-[100px]'} right-0 left-0 m-auto max-w-[500px] px-8`}>
        <div className="bg-darkGray rounded-md flex flex-col gap-6 px-6 py-8">
          <div className="flex justify-between items-center">
            <h2 className="text-white font-bold">{title}</h2>
            <img
              src={images.iconVerticalEllipsis}
              alt="menu"
            />
          </div>
          <p className="text-mediumGray text-[15px]">{description ? description : 'No description for this task.'}</p>
          <h3 className="text-white font-semibold text-[15px] tracking-wider">
            Subtasks ({completedSubtasks} of {subtasks.length})
          </h3>
          {subtasks.map((task, index) => (
            <div
              key={index}
              className="p-3 flex items-center gap-4 bg-veryDarkGray"
            >
              <input
                type="checkbox"
                defaultChecked={task.isCompleted ? true : false}
              />
              <h4 className={`${task.isCompleted ? 'text-mediumGray line-through' : 'text-white font-bold'}`}>{task.title}</h4>
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <p className="text-mediumGray">
              Current status: <span className="text-white font-bold tracking-wider">{status}</span>
            </p>
            <button
              className="px-5 py-3 bg-mainPurple hover:bg-lightPurple font-semibold rounded-full text-white"
              onClick={() => taskInfoModal.onClose()}
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
