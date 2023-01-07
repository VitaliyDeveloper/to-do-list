import Button from 'components/Button/Button';
import { Wrapper } from './StatusFilter.styled';

const StatusFilter = () => {
  return (
    <Wrapper>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </Wrapper>
  );
};

export default StatusFilter;
