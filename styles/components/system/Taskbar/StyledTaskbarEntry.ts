import styled from 'styled-components';

const StyledTaskbarEntry = styled.li`
  background-color: pink;
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};
  display: flex;
  place-content: center;
  place-items: center;
`;

export default StyledTaskbarEntry;
