// J'importe la méthode Router d'express
const router = require('express').Router();
// J'importe mon controller ou se trouve toutes mes fonctions
const controller = require('../controllers/public');

// Premiere route
router.get('/', controller.home);

module.exports = router;
