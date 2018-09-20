const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config')[env];

const sequelize = new Sequelize({
  operatorsAliases: Sequelize.Op,
  dialect: config.dialect,
  host: config.host,
  port: config.port,
  database: config.database,
  username: config.username,
  password: config.password,
  pool: {
    min: 2,
    max: 10,
    idle: 30000,
    acquire: 60000
  }
});

const models = {
  user: sequelize.import('./user')
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;
models.op = Sequelize.Op;

export default models;
