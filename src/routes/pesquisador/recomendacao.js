const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('pesquisador/recomendacao', { title: "Recomendação", login: true })
})


module.exports = router;