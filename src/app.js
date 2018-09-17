import express from 'express';
import bodyParser from 'body-parser';

// Create Express server
const app = express();

// Express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export default app;
