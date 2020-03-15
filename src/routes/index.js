var express = require('express');
var router = express.Router();
const homeController = require('../controllers/home.controller');
const userRoutes = require('./pesquisador');
const questaoRoutes = require('./questao');
const questionarioRoutes = require('./questionario');


/* GET home page. */
router.get('/favicon.ico', (req, res) => res.status(204));
router.get('/', homeController.renderHome);
router.use('/pesquisador', userRoutes);
router.use('/questionario', questionarioRoutes);
router.use('/questao', questaoRoutes);

module.exports = router;
