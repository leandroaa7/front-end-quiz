
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
   res.render('pesquisador/questionario', { title: "questionario" })
});

router.post('/', (req,res)=> {
   res.json(req.body);
})

module.exports = router;