import styled from 'styled-components';

const StyledTaskbarEntry = styled.li`
  border-bottom: ${({ theme }) => theme.sizes.taskbar.entry.bottomBorder};
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};
  display: flex;

  figure {
    align-items: center;
    display: flex;

    figcaption {
      color: rgba(255, 255, 255, 0.8);
      font-size: ${({ theme }) => theme.sizes.taskbar.entry.fontSize};
    }

    img {
      height: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
      margin: ${({ theme }) => theme.sizes.taskbar.entry.icon.margin};
      width: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
    }
  }
`;

export default StyledTaskbarEntry;
