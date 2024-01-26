import styled from 'styled-components';

const StyledClock = styled.time`
  height: 100%;
  position: absolute;
  right: 10px;
  width: ${({ theme }) => theme.sizes.clock.width};
  display: flex;
  place-content: center;
  place-items: center;
  font-size: ${({ theme }) => theme.fonts.clock.size};
  color: rgba(255, 255, 255, 0.8);
`;

export default StyledClock;
