import config from 'next.config';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';

type LocalTimeDate = {
  date: string;
  time: string;
  dateTime: string;
};

const useLocaleTimeDate = (now: Date): LocalTimeDate => {
  const { locale = config.i18n?.defaultLocale } = useRouter() || {};
  const { formats } = useTheme();
  return {
    date: new Intl.DateTimeFormat("en-GB", formats.date).format(now),
    time: new Intl.DateTimeFormat(locale, formats.time).format(now),
    dateTime: now.toISOString()
  };
};

export default useLocaleTimeDate;
