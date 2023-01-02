// On importe express
const express = require('express');
// J'importe les CORS
const cors = require('cors');

// J'initialise express dans une constante que je nomme app
const app = express();
// Je crée le lien entre mon app MVC et ma BDD grâce a Sequelize
const db = require('./models');

// J'importe toutes mes routes
const setupRoutes = require('./routes');

// Injecter les CORS dans express
app.use(cors());
// Injecter et accepter le JSON
app.use(express.json());

// Je fais appel à la fonction setupRoutes
setupRoutes(app);

// Je lance le serveur de dev NODE
app.listen(3001, 'localhost', () => {
  console.log('Serveur run to localhost:3001');
});
