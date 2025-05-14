import styled from 'styled-components';

const IconButtonStyled = styled.button`
  background: none;
  border: none;
  color: ${props => props.color || '#fff'};
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const IconButton = ({ icon: Icon, ...props }) => {
  return <IconButtonStyled {...props}><Icon size={18} /></IconButtonStyled>;
};