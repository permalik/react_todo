import { useState } from 'react';
import styled from 'styled-components';
import Tasks from './Tasks';

const MainSection = styled.main`
  padding: 0 2rem;
`;

const TaskWrapper = styled.section`
  padding: 4rem;

  @media (max-width: 750px) {
    padding: 1rem;
  }
`;

const Main = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'First Task',
      description: 'Do first thing',
      date: 'Jul 11th at 17:00',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Second Task',
      description: 'Do second thing',
      date: 'Jul 12th at 17:00',
      priority: 'mid',
    },
    {
      id: 3,
      title: 'Third Task',
      description: 'Do third thing',
      date: 'Jul 13th at 17:00',
      priority: 'low',
    },
  ]);

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log('id');
  };

  return (
    <MainSection>
      <TaskWrapper>
        <Tasks tasks={tasks} onDelete={onDelete} />
      </TaskWrapper>
    </MainSection>
  );
};

export default Main;
