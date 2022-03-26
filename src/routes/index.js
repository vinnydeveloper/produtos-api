const express = require("express");
const ProdutosRoutes = require("../modules/Produtos/produtos.routes");
const routes = express.Router();

routes.use("/produtos", ProdutosRoutes);

module.exports = routes;
