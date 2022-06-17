import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: white;
  border-radius: 6px;
  border: 2px solid #205c2e;
  color: #205c2e;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;

export const DisabledButton = styled(StyledButton)`
  opacity: 0.6;
`;
