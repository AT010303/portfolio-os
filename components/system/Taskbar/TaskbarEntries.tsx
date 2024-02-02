import StyledTaskbarEntries from 'styles/components/system/Taskbar/StyledTaskbarEntries';

import TaskbarEntry from './TaskbarEntry';

const TaskbarEntries = (): JSX.Element => (
  <StyledTaskbarEntries>
    <TaskbarEntry icon="/chrome.ico" title="Chrome" />
  </StyledTaskbarEntries>
);

export default TaskbarEntries;
