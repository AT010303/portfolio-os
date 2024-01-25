import styled from 'styled-components';

const StyledTaskbarEntry = styled.li`
  background-color: pink;
  height: 100%;
  width: ${({ theme }) => theme.sizes.taskbar.entry.width};
  display: flex;
  place-content: center;
  place-items: center;
`;

export default StyledTaskbarEntry;
