// import './App.css';
import styled from "styled-components";
import { useState } from 'react';
import AddTask from './components/AddTask';
import Header from "./components/Header";
// import Main from './components/Main';
import Tasks from './components/Tasks';

const Main = styled.main`
  padding: 0 2rem;
`;

const TaskWrapper = styled.section`
  font-size: var(--tenPxFont);
  padding: 4rem;

  @media (max-width: 750px) {
    padding: 1rem;
  }
`;

const EmptyMessage = styled.p`
  font-size: 2em;
`;

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'First Task',
      description: 'Do first thing',
      date: 'Jul 11th at 17:00',
      priority: false,
    },
    {
      id: 2,
      title: 'Second Task',
      description: 'Do second thing',
      date: 'Jul 12th at 17:00',
      priority: false,
    },
    {
      id: 3,
      title: 'Third Task',
      description: 'Do third thing',
      date: 'Jul 13th at 17:00',
      priority: false,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onPriorityToggle = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, priority: !task.priority } : task)));
  };

  return (
    <>
      <Header />
      <Main>
      {showAddTask && <AddTask onAdd={addTask} />}
      <TaskWrapper>
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onPriorityToggle={onPriorityToggle} />
        ) : (
          <EmptyMessage>List is empty. Please add a task...</EmptyMessage>
        )}
      </TaskWrapper>
      </Main>
    </>
  );
}

export default App;
