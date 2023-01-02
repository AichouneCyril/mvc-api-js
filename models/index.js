// J'importe Sequelize
const Sequelize = require('sequelize');

// Je crée la connection
const connexion = new Sequelize('template_api', 'yavuz', 'yavuz', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  autoreconnect: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// Je créer un object vide pour communiquer avec ma BDD
const db = {};

// Je sauvegarde le module Sequelize dans ma nouvelle constante
db.Sequelize = Sequelize;
// Je sauvegarde ma connexion dans ma nouvelle constante
db.connexion = connexion;

// J'importe mon model ou table qui sera crée dans ma bdd dans ma nouvelle constante
db.user = require('./user')(connexion, Sequelize);
db.role = require('./role')(connexion, Sequelize);

db.role.hasMany(db.user);
db.user.belongsTo(db.role);

// Je crée la connection puis créer mon model ou ma table user
db.connexion.sync({ force: false }).then(() => {
  console.log('Resync Db');
});

module.exports = db;
