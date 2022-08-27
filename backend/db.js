const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  database: 'library_web',
  username: 'library_db_admin',
  password: 'library_db_admin',
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;  