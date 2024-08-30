import styled from 'styled-components';

const Button = styled.button`
  background-color: #0070f3;
  border: none;
  padding: 1rem 2rem;
  color: white;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;

export default Button;