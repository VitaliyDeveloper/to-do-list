import TaskCounter from 'components/TaskCounter/TaskCounter';
import StatusFilter from 'components/StatusFilter/StatusFilter';
import { Wrapper, Section, Title } from './AppBar.styled';

const AppBar = () => {
  return (
    <Wrapper>
      <Section>
        <Title>Tasks</Title>
        <TaskCounter />
      </Section>
      ;
      <Section>
        <Title>Filter by status</Title>
        <StatusFilter />
      </Section>
    </Wrapper>
  );
};

export default AppBar;
