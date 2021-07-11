import styled from 'styled-components';

const taskSection = styled.section`
  padding: ;
`;

const taskTitle = styled.h3``;

const Task = ({ task }) => {
  return (
    <taskSection className="task">
      <taskTitle>{task.title}</taskTitle>
      <p>{task.description}</p>
      <p>{task.date}</p>
    </taskSection>
  );
};

export default Task;
