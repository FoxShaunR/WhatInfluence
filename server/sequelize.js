const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

// isModelFilename and getSequelize based on 
// code written by Jonathon Lui and Eric Lange
const isModelFilename = name => (
  name.indexOf('.') !== 0 &&
  !['index.js', 'CustomDataTypes.js'].includes(name) &&
  name.slice(-3) === '.js' &&
  name.slice(-8) !== '.test.js'
);

let sequelize;

const getSequelize = () => {
  if (sequelize) return sequelize;

  const {
    DB_NAME,
    DB_HOST,
    DB_USER,
    DB_PASS,
  } = process.env;
  
  sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });

  fs.readdirSync(path.join(__dirname, 'models'))
  .filter(isModelFilename)
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, 'models', file));
    sequelize[model.name] = model;
  });

  Object.keys(sequelize).forEach((modelName) => {
    if (sequelize[modelName].associate) {
      sequelize[modelName].associate(sequelize);
    }
  });

  return sequelize;
}

exports.getSequelize = getSequelize;
