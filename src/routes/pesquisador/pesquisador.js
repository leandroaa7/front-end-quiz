
var express = require('express');
var router = express.Router();

const questaoRoutes = require('./questao');
const questionarioRoutes = require('./questionario');
const recomendacaoRoutes = require('./recomendacao');

const pesquisadorList = [
    {
        id: 1,
        nome: "leandro",
        email: "leandro32@gmail.com",
        "createdAt": "2020-03-27T20:36:11.502Z",
        "updatedAt": "2020-03-27T20:36:11.502Z"
    },
    {
        id: 2,
        nome: "leandro33",
        email: "leandro33@gmail.com",
        "createdAt": "2020-03-27T20:36:36.941Z",
        "updatedAt": "2020-03-27T20:36:36.941Z"
    }
]

router.get('/', (req, res) => {
    res.render('pesquisador/pesquisador', { title: "pesquisador", login: true, pesquisadorList: pesquisadorList })
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