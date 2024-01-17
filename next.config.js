/** @type {import('next').NextConfig} */
module.exports = {
  compiler: {
    styledComponents: true
  },
  i18n: {
    localeDetection: false,
    locales: ['en'],
    defaultLocale: 'en'
  },
  reactStrictMode: true
};
