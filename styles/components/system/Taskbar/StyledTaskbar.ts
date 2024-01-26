import styled from 'styled-components';

const StyledTaskbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.taskbar};
  bottom: 0;
  height: ${({ theme }) => theme.sizes.taskbar.height};
  left: 0;
  position: absolute;
  right: 0;
  width: 100vw;
  backdrop-filter: blur(3px);
`;

export default StyledTaskbar;
