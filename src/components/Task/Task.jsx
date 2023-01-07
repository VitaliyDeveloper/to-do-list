import { MdClose } from 'react-icons/md';

const Task = ({ task }) => {
  return (
    <div>
      <input type="checkbox" checked={task.completed} />
      <p>{task.text}</p>
      <button>
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Task;
