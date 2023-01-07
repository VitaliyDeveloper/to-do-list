import Task from 'components/Task/Task';
import { List, Item } from './TaskList.styled';

const TaskList = () => {
  return (
    <List>
      {[].map(task => (
        <Item key={task.id}>
          <Task task={task} />
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
