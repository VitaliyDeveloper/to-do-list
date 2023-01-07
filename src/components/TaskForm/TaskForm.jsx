import Button from 'components/Button/Button';

const TaskForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="text" placeholder="Enter task text..." />
        <Button type="submit">Add task</Button>
      </label>
    </form>
  );
};

export default TaskForm;
