// import './App.css';
import { useState } from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
// import styled from "styled-components";

function App() {
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

  return (
    <>
      <Header />
      <Tasks tasks={tasks} />
    </>
  );
}

export default App;
