import path from 'path';

// import .env variables
require('dotenv-safe').load({
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.example')
});

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT
};
