import { useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { deleteTask, toggleCompleted } from 'redux/actions';
import { Wrapper, Text, Btn, Checkbox } from './Task.styled';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <Text>{task.text}</Text>
      <Btn onClick={handleDelete}>
        <FaTrashAlt size={20} />
      </Btn>
    </Wrapper>
  );
};

export default Task;
