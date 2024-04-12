'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./users.js');
const todo = require('./todo.js');
const Collection = require('./collection.js');


const POSTGRES_URI =
  process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;

const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {

  },
} : {};

// Hooks
// sequelize allows us to interact with the user model before adding data to the database using the beforeCreate hook. 
const sequelizeDatabase = new Sequelize(POSTGRES_URI);
const todoModel = todo(sequelizeDatabase, DataTypes);
const todoCollection = new Collection(todoModel);

module.exports = {
  db: sequelizeDatabase,
  users: userSchema(sequelizeDatabase, DataTypes),
  todoCollection
};
