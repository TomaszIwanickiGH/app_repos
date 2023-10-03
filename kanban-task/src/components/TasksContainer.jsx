import useGlobals from '../hooks/useGlobals';
import useTaskInfoModal from '../hooks/useTaskInfoModal';
import Task from './Task';

const TasksContainer = ({ stage, tasks }) => {
  const globals = useGlobals();
  const taskInfoModal = useTaskInfoModal();

  return (
    <div className="flex flex-col gap-6">
      {tasks.length !== 0 && (
        <div className="flex items-center gap-4">
          <div className="w-[15px] h-[15px] rounded-full bg-mainPurple" />
          <h3 className="text-mediumGray">
            {stage} ({tasks.length})
          </h3>
        </div>
      )}
      <div className="flex flex-col flex-wrap gap-6">
        {tasks.map((task, index) => (
          <Task
            key={index}
            title={task.title}
            subtasks={task.subtasks.length}
            completedSubtasks={task.subtasks.filter((sub) => sub.isCompleted).length}
            handleClick={() => {
              globals.setChosenTask(task.title, task.description, task.status, task.subtasks, task.subtasks.filter((sub) => sub.isCompleted).length);
              taskInfoModal.onOpen();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TasksContainer;
