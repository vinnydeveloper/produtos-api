const PrdutosModel = require("../../models/produtos");

module.exports = {
  async create(req, res, next) {
    try {
      const newProduto = await PrdutosModel.create(req.body);
      return res.status(201).json(newProduto);
    } catch (error) {
      return next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const produtoUpdated = await PrdutosModel.findOneAndUpdate(
        { _id: id },
        req.body,
        {
          new: true,
        }
      );
      return res.status(200).json(produtoUpdated);
    } catch (error) {
      return next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await PrdutosModel.deleteOne({ _id: id });

      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
      return next(error);
    }
  },
  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const produto = await PrdutosModel.findOne({ _id: id });

      return res.json(produto);
    } catch (error) {
      return next(error);
    }
  },
  async getAll(req, res, next) {
    try {
      const produtos = await PrdutosModel.find();

      return res.json(produtos);
    } catch (error) {
      return next(error);
    }
  },
};
