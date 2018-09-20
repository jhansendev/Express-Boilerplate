import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import logger from './config/logger';

// Create Express server
const app = express();

// Express configuration
// Helmet middleware
app.use(
  helmet({
    frameguard: {
      action: 'deny'
    },
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"]
      }
    },
    referrerPolicy: {
      policy: 'same-origin'
    }
  })
);

// Body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Morgan middleware
app.use(morgan('combined', { stream: logger.stream }));

// Cors middleware
// Enables all CORS requests
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
