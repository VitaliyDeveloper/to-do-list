import { MdClose } from 'react-icons/md';
import { Wrapper, Text, Btn, Checkbox } from './Task.styled';

const Task = ({ task }) => {
  return (
    <Wrapper>
      <Checkbox type="checkbox" checked={task.completed} />
      <Text>{task.text}</Text>
      <Btn>
        <MdClose size={24} />
      </Btn>
    </Wrapper>
  );
};

export default Task;
