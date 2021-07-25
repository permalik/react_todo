import styled from 'styled-components';
import Delete from './DeleteButton';

const TaskSection = styled.section`
  background: ${(props) => props.theme.gainsboro};
  border-radius: var(--borderRadius);
  box-shadow: var(--mainShadow);
  box-sizing: border-box;
  font-size: var(--tenPxFont);
  margin-bottom: 1rem;
  min-width: 12rem;
  padding: 2em;

  @media (max-width: 600px) {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 3em;
  }
`;

const TaskHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    flex-flow: column nowrap;
    margin-bottom: 2rem;
  }
`;

const TaskTitle = styled.h3`
  font-size: 3em;
  white-space: nowrap;

  @media (max-width: 600px) {
    margin-bottom: 2rem;
  }
`;

const TaskDescription = styled.p`
  display: block;
  font-size: 2em;
  margin-bottom: 2rem;
  word-break: break-all;
  width: 100%;

  @media (max-width: 600px) {
    text-align: center;
  }

  @media (min-width: 600px) {
    padding-left: 0.25rem;
  }
`;

const TaskDate = styled.p`
  font-size: 1.5em;
`;

const Task = ({ task, onDelete, onPriorityToggle }) => {
  return (
    <TaskSection
      className={`task ${task.priority ? 'priority' : ''}`}
      onDoubleClick={() => onPriorityToggle(task.id)}
    >
      <TaskHeader>
        <TaskTitle>{task.title}</TaskTitle>
        <Delete onDelete={() => onDelete(task.id)} />
      </TaskHeader>
      <TaskDescription>{task.description}</TaskDescription>
      <TaskDate>{task.date}</TaskDate>
    </TaskSection>
  );
};

export default Task;
