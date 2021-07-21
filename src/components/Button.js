import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  background: transparent;
  border: 3px solid ${(props) => props.theme.black};
  border-radius: 5px;
  box-shadow: var(--buttonShadow);
  color: ${(props) => props.theme.black};
  font-size: 2.5em;
  padding: 1rem 2rem;

  &:hover {
    background: ${(props) => props.theme.black};
    box-shadow: var(--buttonShadowHover);
    color: ${(props) => props.theme.white};
    cursor: pointer;
  }

  &:active {
    background: hsl(0, 0%, 0%);
  }

  @media (max-width: 1000px) {
    font-size: 2.25em;
    padding: 0.75rem 1.5rem;
  }

  @media (max-width: 750px) {
    font-size: 2em;
    padding: 0.5rem 1rem;
  }
`;

const Button = ({ text, className, onClick }) => {
  return (
    <ButtonComponent className={className} onClick={onClick}>
      {text}
    </ButtonComponent>
  );
};

Button.defaultProps = {
  text: 'Text',
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
