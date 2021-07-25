import { useState } from 'react';
import styled from 'styled-components';

const AddForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  font-size: var(--tenPxFont);
  min-width: 12rem;
  padding: 4rem;

  @media (max-width: 750px) {
    padding: 1rem;
  }

  @media (min-width: 1024px) {
    margin: 0 auto;
    width: 815px;
  }
`;

const FormControl = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;

const FormHeading = styled.h4`
  font-size: 1.75em;
  margin-bottom: 0.5rem;
`;

const FormLabel = styled.label``;

const FormInput = styled.input`
  border: 1px solid black;
  border-radius: var(--borderRadius);
  box-shadow: var(--mainShadow);
  box-sizing: border-box;
  margin: 0 0 2rem 0.5rem;
  padding: 0.5rem;

  &:hover {
    box-shadow: var(--mainShadowHover);
  }

  &:active {
    box-shadow: var(--buttonShadow);
  }

  &:focus {
    box-shadow: var(--buttonShadow);
  }
`;

const FormCheckbox = styled.input`
  align-self: flex-start;
  margin: 0 0 2rem 1rem;
`;

const FormSubmit = styled.input`
  background: transparent;
  border: 2px solid ${(props) => props.theme.black};
  border-radius: 5px;
  box-shadow: var(--buttonShadow);
  color: ${(props) => props.theme.black};
  font-size: 2em;
  padding: 0.5rem 0;

  &:hover {
    background: ${(props) => props.theme.black};
    box-shadow: var(--buttonShadowHover);
    color: ${(props) => props.theme.white};
    cursor: pointer;
  }

  &:active {
    background: hsl(0, 0%, 0%);
  }
`;

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert('Please add a task');
      return;
    }

    onAdd({ title, description, date, priority });

    setTitle('');
    setDescription('');
    setDate('');
    setPriority(false);
  };

  return (
    <AddForm onSubmit={onSubmit}>
      <FormControl>
        <FormHeading>
          <FormLabel>Task</FormLabel>
        </FormHeading>
        <FormInput
          placeholder="Add Task"
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          value={title}
        />
      </FormControl>
      <FormControl>
        <FormHeading>
          <FormLabel>Description</FormLabel>
        </FormHeading>
        <FormInput
          placeholder="Describe event"
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          value={description}
        />
      </FormControl>
      <FormControl>
        <FormHeading>
          <FormLabel>Day & Time</FormLabel>
        </FormHeading>
        <FormInput
          placeholder="Add Day & Time"
          onChange={(e) => setDate(e.target.value)}
          type="date"
          value={date}
        />
      </FormControl>
      <FormControl>
        <FormHeading>
          <FormLabel>Priority?</FormLabel>
        </FormHeading>
        <FormCheckbox
          checked={priority}
          onChange={(e) => setPriority(e.currentTarget.checked)}
          type="checkbox"
          value={priority}
        />
      </FormControl>
      <FormSubmit type="submit" value="Save Task" />
    </AddForm>
  );
};

export default AddTask;
