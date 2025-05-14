import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: ${props => props.variant === 'primary' ? '#007acc' : '#444'};
  color: white;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${props => props.variant === 'primary' ? '#0069b3' : '#555'};
  }
`;

export const Button = ({ children, variant = 'default', ...props }) => {
  return <StyledButton variant={variant} {...props}>{children}</StyledButton>;
};