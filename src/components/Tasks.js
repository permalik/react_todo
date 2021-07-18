import Task from './Task';

const Tasks = ({ tasks, onDelete, onPriorityToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onPriorityToggle={onPriorityToggle} />
      ))}
    </>
  );
};

export default Tasks;
