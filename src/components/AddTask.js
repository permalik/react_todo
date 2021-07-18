import styled from 'styled-components';

const AddForm = styled.form`
  position: fixed;
`;

const FormControl = styled.div``;

const FormLabel = styled.label``;

const FormInput = styled.input``;

const FormSubmit = styled.input``;

const AddTask = () => {
  return (
    <AddForm>
      <FormControl>
        <FormLabel>Task</FormLabel>
        <FormInput type="text" placeholder="Add Task" />
      </FormControl>
      <FormControl>
        <FormLabel>Day & Time</FormLabel>
        <FormInput type="text" placeholder="Add Day & Time" />
      </FormControl>
      <FormControl>
        <FormLabel>Set Priority</FormLabel>
        <FormInput type="checkbox" />
      </FormControl>
      <FormSubmit type="submit" value="Save Task" />
    </AddForm>
  );
};

export default AddTask;
