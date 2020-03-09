
const renderHome = (req, res) => {
    res.render('visitante/index', { title: 'Home' })
};

module.exports.renderHome = renderHome;