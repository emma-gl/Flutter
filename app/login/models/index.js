const config = require("../login/config/db.config.js.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 config.DB,
 config.USER,
 config.PASSWORD,
 {
 host: config.HOST,
 dialect: config.dialect,
 operatorsAliases: false,
 pool: {
 max: config.pool.max,
 min: config.pool.min,
 acquire: config.pool.acquire,
 idle: config.pool.idle
 }
 }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Account = require("./account.model.js")(sequelize, Sequelize);
module.exports = db;