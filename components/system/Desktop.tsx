import { FC } from 'react';
import StyledDesktop from 'styles/components/system/StyledDesktop';

const Desktop: FC<{ children?: any }> = ({ children }) => (
  <StyledDesktop>{children}</StyledDesktop>
);

export default Desktop;
