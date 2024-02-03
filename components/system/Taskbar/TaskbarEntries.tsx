import { ProcessConsumer } from 'contexts/process';
import StyledTaskbarEntries from 'styles/components/system/Taskbar/StyledTaskbarEntries';

import TaskbarEntry from './TaskbarEntry';

const TaskbarEntries = (): JSX.Element => (
  <StyledTaskbarEntries>
    <ProcessConsumer>
      {({ processes }) =>
        Object.entries(processes).map(([id, { icon, title }]) => (
          <TaskbarEntry key={id} icon={icon} title={title} />
        ))
      }
    </ProcessConsumer>
  </StyledTaskbarEntries>
);

export default TaskbarEntries;
