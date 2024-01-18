import StyledWindow from 'styles/components/system/StyledWindow';

const Window: React.FC<{ children?: any }> = ({ children }) => (
  <StyledWindow>{children}</StyledWindow>
);

export default Window;
