
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('pesquisador/index', { title: "Pesquisador" })
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


module.exports = router;