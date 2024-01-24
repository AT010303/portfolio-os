import StyledWindow from 'styles/components/system/StyledWindow';

const Window: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <StyledWindow>{children}</StyledWindow>
);

export default Window;
