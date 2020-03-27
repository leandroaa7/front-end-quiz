var express = require('express');
var router = express.Router();
const homeController = require('../controllers/home.controller');
const userRoutes = require('./pesquisador/pesquisador');
const questionarioRoutes = require('./questionario');

/* GET home page. */
router.get('/', homeController.renderHome);
router.get('/termo',homeController.getTermo)

router.use('/pesquisador', userRoutes);
router.use('/questionario',questionarioRoutes);


module.exports = router;
