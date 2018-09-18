import app from './app';
import config from './config/config';
import logger from './config/logger';

// Start Express Server
app.listen(config.port, () => {
    logger.info(`Server started on port ${config.port} (${config.env})`);
});

export default app;