import { Text, TaskContainer } from './TaskCounter.styled';

const TaskCounter = () => {
  return (
    <TaskContainer>
      <Text>Active: 0</Text>
      <Text>Completed: 0</Text>
    </TaskContainer>
  );
};

export default TaskCounter;
