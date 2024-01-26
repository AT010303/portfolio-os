/* eslint-disable no-undef */
import { useEffect } from 'react';

// 1000 is millisecont in second
const useSyncedClock = (callback: () => void): void => {
  useEffect(() => {
    let timeoutID: NodeJS.Timeout;
    timeoutID = setTimeout(() => {
      callback();
      timeoutID = setInterval(callback, 1000);
    }, 1000 - new Date().getMilliseconds());
    return () => clearTimeout(timeoutID);
  }, [callback]);
};

export default useSyncedClock;
