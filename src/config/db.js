import Sequelize from 'sequelize';
import { logger } from './logger';

const db = new Sequelize(process.env.DB, 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

db.authenticate()
  .then(() => logger.info('Database Connected....'))
  .catch((err) => logger.info(`Error: ${err}`));

export default db;
