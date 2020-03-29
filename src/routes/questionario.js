var express = require('express');
var router = express.Router();

//configurar questoes
let questionarioList = require('../utils/questoes');
let first = questionarioList[0];
questionarioList.shift();
let total_questao = questionarioList.length - 1;

//configurar recomendação/feedback
let recomendacaoList = require('../utils/recomendacao');

router.get('/', (req, res) => {
    let formParams =
    {
        title: 'Questionário',
        first: first,
        questionarioList: questionarioList,
        total_questao: total_questao,
        recomendacaoList: recomendacaoList
    };

    res.render('visitante/questionario', formParams)
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('/questionario/resultado')
})

router.get('/resultado', (req, res) => {
    res.render('visitante/resposta')
})

module.exports = router;