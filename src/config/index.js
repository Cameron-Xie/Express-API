import nconf from 'nconf';
import dotenv from 'dotenv';

const loadConfig = () => {
  const config = new nconf.Provider();
  dotenv.config({ path: '.api.env' });

  config
    .use('memory')
    .env({
      separator: '_',
      lowerCase: true,
      parseValues: true,
    });

  return config;
};

export default loadConfig();
