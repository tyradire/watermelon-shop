const { Like } = require('../models/models');
const NotFoundError = require('../errors/NotFoundError');

const addLike = (req, res, next) => {
  const id = req.params.id;
  Like.create({productId: id, userId: req.user.id})
  .then((item) => res.status(200).send({item}))
  .catch(next);
}

const deleteLike = (req, res, next) => {
  const id = req.params.id
  Like.destroy({
    where: { productId: id }
  })
  .then((item) => res.status(200).send({item}))
  .catch(next);
}

const getLikes = (req, res, next) => {
  console.log(req)
  console.log(req.user)
  console.log(req.user.id)
  const id = req.user.id;
  Like.findAll({
    where: { userId: id }
  })
  .then((user) => {
    if (!user) throw new NotFoundError('Пользователь с указанным id не найден')
    console.log(user)
    res.status(200).send(user)
  })
  .catch(next);
}

module.exports = {
  addLike, deleteLike, getLikes,
};