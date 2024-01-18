import styled from 'styled-components';

const StyledDesktop = styled.main`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.backgroundcolor};
`;

export default StyledDesktop;
