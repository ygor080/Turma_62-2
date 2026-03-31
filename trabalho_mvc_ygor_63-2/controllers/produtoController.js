const Produto = require('../models/produtoModel');

exports.listar = (req, res) => {
    const modo = req.query.modo || 'listar';
    const id = req.query.id;

    let produto = null;

    if (modo === 'editar' && id) {
        produto = Produto.getById(id);
    }

    res.render('produtos', {
        produtos: Produto.getAll(),
        modo,
        produto
    });
};

exports.criar = (req, res) => {
    Produto.add(req.body);
    res.redirect('/produtos');
};

exports.atualizar = (req, res) => {
    Produto.update(req.params.id, req.body);
    res.redirect('/produtos');
};

exports.deletar = (req, res) => {
    Produto.delete(req.params.id);
    res.redirect('/produtos');
};