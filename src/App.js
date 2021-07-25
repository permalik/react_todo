// import './App.css';
import styled from "styled-components";
import { useEffect } from 'react';
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
  const [tasks, setTasks] = useState(() => {
    const localData = localStorage.getItem('tasks');
    return localData ? JSON.parse(localData) : []; 
  });
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
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
