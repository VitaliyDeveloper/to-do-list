import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-flex;
  text-align: center;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: var(--accent-color);
  color: inherit;

  &.isSelected {
    background-color: var(--second-color);
    color: var(--white-color);
  }

  &:hover {
    background-color: var(--second-color);
    color: var(--white-color);
  }

  &:active {
    background-color: var(--second-color);
    color: var(--white-color);
  }
`;
