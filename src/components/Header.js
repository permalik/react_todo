import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const PageHeader = styled.header`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  font-size: var(--tenPxFont);
  justify-content: space-between;
  padding: 5vmin 5rem;

  @media (max-width: 750px) {
    padding: 5vmin 2rem;
  }
`;

const PageTitle = styled.h1`
  color: ${(props) => props.theme.halfBaked};
  font-size: 5em;

  @media (max-width: 300px) {
    margin-right: 2rem;
  }
`;

const AddButton = styled(Button)`
  border: 3px solid ${(props) => props.theme.olivine};
  color: ${(props) => props.theme.olivine};

  &:hover {
    background: ${(props) => props.theme.olivine};
    color: ${(props) => props.theme.white};
    cursor: pointer;
  }

  &:active {
    background: hsl(96, 42%, 57%);
  }
`;

const Header = ({ title }) => {
  const addTask = () => {
    console.log('Task Added');
  };

  return (
    <PageHeader>
      <PageTitle>{title}</PageTitle>
      <AddButton text="Add" onClick={addTask} />
    </PageHeader>
  );
};

Header.defaultProps = {
  title: 'Todo',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
