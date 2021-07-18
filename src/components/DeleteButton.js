import styled from 'styled-components';

const DeleteButton = styled.button`
  align-items: center;
  background: hsl(0, 70%, 65%);
  border: none;
  border-radius: var(--borderRadius);
  box-shadow: var(--buttonShadow);
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.25em;

  &:hover {
    background: hsl(0, 85%, 58%);
    box-shadow: var(--buttonShadowHover);
  }

  &:active {
    background: hsl(0, 80%, 49%);
  }
`;

const DeleteX = styled.img`
  filter: invert(100%) sepia(0%) saturate(1000%) hue-rotate(0deg) brightness(100%) contrast(100%);
  width: 20px;
`;

const Delete = ({ onDelete }) => {
  return (
    <DeleteButton onClick={onDelete}>
      <DeleteX src={process.env.PUBLIC_URL + 'https://res.cloudinary.com/permalik/image/upload/c_scale,w_20/v1626214862/close_svg.svg'} />
    </DeleteButton>
  );
};

export default Delete;
