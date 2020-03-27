var express = require('express');
var router = express.Router();

let questionarioList = require('../utils/questoes');
let first = questionarioList[0];
questionarioList.shift();
let total_questao = questionarioList.length - 1;

router.get('/', (req, res) => {
    res.render('visitante/questionario', { title: 'Questionário', first: first, questionarioList: questionarioList, total_questao: total_questao })
})

router.post('/', (req, res) => {
    res.redirect('/questionario/resultado')
})

router.get('/resultado', (req, res) => {
    res.render('visitante/resposta')
})

module.exports = router;