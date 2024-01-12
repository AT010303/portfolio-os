import type { FC } from 'react';
import processDirectory from 'utils/processDirectory';
import { createContext, useState } from 'react';
import type { ProcessContextState } from 'types/contexts/process';



const ProcessContext = createContext<ProcessContextState>({ processes: {} });

//children type any is added because of the error: may be some ts eslint stuf dont know exactly but it works
export const ProcessProvider: FC<{ children: any }> = ({ children }) => {
  const [processes] = useState(processDirectory);

  return (
    <ProcessContext.Provider value={{ processes }}>
      {children}
    </ProcessContext.Provider>
  );
};

export const ProcessConsumer = ProcessContext.Consumer;
