import express from 'express';
import bodyParser from 'body-parser';
import P from 'bluebird';

export default routes =>
  P
    .try(() => {
      const app = express();
      app.use(bodyParser.urlencoded({ extended: false }));

      return app;
    })
    .then(app => {
      app.use('/api/v1/', routes);

      return app;
    });
