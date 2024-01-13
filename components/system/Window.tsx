import type { FC } from 'react';
import StyledWindow from 'styles/components/system/StyledWindow';

const Window: FC<{children: any}> = ({ children }) => <StyledWindow>{children}</StyledWindow>;

export default Window;