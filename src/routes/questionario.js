var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('visitante/questionario', { title: 'Questionário' })
})

router.post('/', (req, res) => {
    //console.log(req.body)
    res.redirect('/questionario/resultado')
})

router.get('/resultado', (req, res) => {
    res.render('visitante/resposta')
})

module.exports = router;