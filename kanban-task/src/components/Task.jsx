const Task = ({ title, subtasks, completedSubtasks }) => {
  return (
    <div className="flex flex-col gap-1 py-6 px-4 rounded-xl bg-darkGray w-[300px] min-h-[]80px hover:cursor-pointer">
      <h3 className="text-white hover:text-mainPurple font-semibold">{title}</h3>
      <p className="text-mediumGray text-[14px]">
        {completedSubtasks} of {subtasks} subtasks
      </p>
    </div>
  );
};

export default Task;
