import Sequelize from 'sequelize';

export const db = new Sequelize(process.env.DB, 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });

