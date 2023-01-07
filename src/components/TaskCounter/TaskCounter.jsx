import { useSelector } from 'react-redux';
import { getTasks } from 'redux/selectors';
import { Text, TaskContainer } from './TaskCounter.styled';

const TaskCounter = () => {
  const tasks = useSelector(getTasks);

  const count = tasks.reduce(
    (acc, tasks) => {
      if (tasks.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <TaskContainer>
      <Text>Active: {count.active}</Text>
      <Text>Completed: {count.completed}</Text>
    </TaskContainer>
  );
};

export default TaskCounter;
