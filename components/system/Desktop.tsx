import StyledDesktop from 'styles/components/system/StyledDesktop';

const Desktop: React.FC<{ children?: any }> = ({ children }) => (
  <StyledDesktop>{children}</StyledDesktop>
);

export default Desktop;
