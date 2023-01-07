import Task from 'components/Task/Task';

const TaskList = () => {
  return (
    <ul>
      {[].map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
