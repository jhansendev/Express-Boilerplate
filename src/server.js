import app from './app';
import logger from './config/logger';
import models from './db/models';

// Test database connection
models.sequelize
  .authenticate()
  .then(() => {
    logger.info('Database connection established successfully');
  })
  .catch(err => {
    logger.error('Unable to connect to database:', err);
  });

// Start Express server
app.listen(process.env.PORT, () => {
  logger.info(`Server started on port ${process.env.PORT} (${process.env.NODE_ENV})`);
});

export default app;
