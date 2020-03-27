const path = require('path');

const renderHome = (req, res) => {
    res.render('visitante/index', { title: 'Home' })
};

const getTermo = (req, res) => {
    res.download(path.resolve(__dirname, "../public/file/termo.pdf"))
}

module.exports.renderHome = renderHome;
module.exports.getTermo = getTermo;
