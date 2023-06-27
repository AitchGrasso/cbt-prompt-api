const promptController = require('./controllers/prompt'); 


module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
};
