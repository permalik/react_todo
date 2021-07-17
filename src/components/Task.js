import styled from 'styled-components';
import Delete from './DeleteButton';

const TaskSection = styled.section`
  background: ${(props) => props.theme.gainsboro};
  border-radius: var(--borderRadius);
  box-shadow: var(--mainShadow);
  font-size: var(--tenPxFont);
  margin-bottom: 1rem;
  padding: 2em;
`;

const TaskHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const TaskTitle = styled.h3`
  font-size: 3em;
  margin-bottom: 0.25rem;
  white-space: nowrap;
`;

const TaskDescription = styled.p`
  font-size: 2em;
  margin-bottom: 0.75rem;
`;

const TaskDate = styled.p`
  font-size: 1.5em;
`;

const Task = ({ task, onDelete }) => {
  return (
    <TaskSection className="task">
      <TaskHeader>
        <TaskTitle>{task.title}</TaskTitle>
        <Delete onClick={() => onDelete(task.id)} />
      </TaskHeader>
      <TaskDescription>{task.description}</TaskDescription>
      <TaskDate>{task.date}</TaskDate>
    </TaskSection>
  );
};

export default Task;
