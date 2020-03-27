
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
   res.render('pesquisador/questionario', { title: "questionario", login: true })
});
router.get('/questionario2', (req, res) => {
   res.render('pesquisador/questionario2', { title: "questionario", login: true })
});

router.post('/', (req, res) => {
   res.json(req.body);
})

module.exports = router;