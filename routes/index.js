// J'importe toutes mes routes qui ne nécessitent pas de token
const public = require('./public');

const setupRoutes = (app) => {
  app.use('/', public);
};

module.exports = setupRoutes;
