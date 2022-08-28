const authorDao = require('./authorsDao');

let authorController = {
  addAuthor: addAuthor,
  findAuthor: findAuthor,
  findAuthorById: findAuthorById,
  updateToAuthor: updateToAuthor,
  deleteByIdAuthor: deleteByIdAuthor
};

const addAuthor = (req, res) => {
  let author = req.body;
  authorDao.create(author)
            .then((data) => {
              res.send(data);
            })
            .catch((err) => {
              console.log(err);
            });
}

const findAuthorById = (req, res) => {
  authorDao.findById(req.params.id)
            .then((data) => {
              res.status(200).json({ author: data });
            })
            .catch((err) => {
              console.log(err);
            });
}

const updateToAuthor = (req, res) => {
  authorDao.updateAuthor(red.body, req.params.id)
            .then((data) => {
              res.status(200).json({
                author: data
              });
            })
            .catch((err) => {
              console.log(err);
            })
}

const findAuthor = (req, res) => {
  authorDao.findAll()
            .then((data) => {
              res.send(data);
            })
            .catch((err) => {
              console.log(err);
            });
}

module.exports = authorController;