import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import logger from './config/logger';

// Create Express server
const app = express();

// Express configuration
// Body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Morgan middleware
app.use(morgan('combined', { stream: logger.stream }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
