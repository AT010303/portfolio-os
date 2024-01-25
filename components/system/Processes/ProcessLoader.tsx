import { ProcessConsumer } from 'contexts/process';
import type { Process } from 'types/contexts/process';

import RenderProcess from './RenderProcess';

const ProcessesReducer = ([id, process]: [string, Process]) => (
  <RenderProcess key={id} {...process} />
);

const ProcessLoader: React.FC = () => (
  <ProcessConsumer>
    {({ processes }) => Object.entries(processes).map(ProcessesReducer)}
  </ProcessConsumer>
);

export default ProcessLoader;
