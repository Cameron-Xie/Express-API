import config from './config';
import routes from './routes';
import createServer from './server';

const apiConfig = config.get('api');

createServer(routes)
  .then(app => {
    if (!Object.prototype.hasOwnProperty.call(apiConfig, 'host')
      || !Object.prototype.hasOwnProperty.call(apiConfig, 'port')) {
      throw new Error('host or port is missing from config.');
    }

    app.listen(apiConfig.port, apiConfig.host);
    return app;
  })
  // TODO Error handler.
  .catch(console.error);
