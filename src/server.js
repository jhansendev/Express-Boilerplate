import app from './app';
import config from './config/config';

// Start Express Server
app.listen(config.port, () => {
    console.info(`Server started on port ${config.port} (${config.env})`);
});

export default app;