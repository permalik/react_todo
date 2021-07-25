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
    border-style: outset;
    box-shadow: var(--buttonShadowHover);
    cursor: pointer;
  }

  &:active {
    border-style: inset;
    box-shadow: hsla(206, 6%, 25%, 0.4) 0px 2px 2px 0px, hsla(206, 6%, 25%, 0.2) 0px 3px 6px 2px;
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

const Button = ({ bgColor, border, color, text, className, onClick }) => {
  return (
    <ButtonComponent className={className} onClick={onClick} style={{ background: bgColor, borderColor: border, color: color }}>
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
