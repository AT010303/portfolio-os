import StyledTaskbar from 'styles/components/system/Taskbar/StyledTaskbar';

import Clock from './Clock';
import StartButton from './StartButton';
import TaskbarEntries from './TaskbarEntries';

const Taskbar = (): JSX.Element => (
  <StyledTaskbar>
    <StartButton />
    <TaskbarEntries />
    <Clock />
  </StyledTaskbar>
);

export default Taskbar;
