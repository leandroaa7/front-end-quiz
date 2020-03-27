
var express = require('express');
var router = express.Router();

const questaoRoutes = require('./questao');
const questionarioRoutes = require('./questionario');
const recomendacaoRoutes = require('./recomendacao');

router.get('/', (req, res) => {
    res.render('pesquisador/pesquisador', { title: "pesquisador", login: true })
});

router.post('/', (req, res) => {
    res.json(req.body);
});

router.post('/atualizar', (req, res) => {
    res.json(req.body);
})

router.post('/excluir', (req, res) => {
    res.json(req.body);
})


router.use('/questionario', questionarioRoutes);
router.use('/questao', questaoRoutes);
router.use('/recomendacao', recomendacaoRoutes);


module.exports = router;