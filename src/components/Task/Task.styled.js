import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
`;

export const Text = styled.p`
  flex-grow: 1;
`;
export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  color: var(--dark-color);

  &:hover {
    background-color: var(--second-color);
    color: var(--light-color);
  }

  &:active {
    background-color: #bdbdbd;
  }
`;

export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
