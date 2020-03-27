var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('visitante/questionario', { title: 'Questionário' })
})

module.exports = router;