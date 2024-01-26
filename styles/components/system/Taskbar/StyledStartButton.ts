import styled from 'styled-components';

const StyledStartButton = styled.button.attrs({ type: 'button' })`
  font-size: 22px;
  color: #FFF;
  height: 100%;
  left: 0;
  position: absolute;
  width: ${({ theme }) => theme.sizes.startButton.width};
  display: flex;
  place-content: center;
  place-items: center;
`;

export default StyledStartButton;
