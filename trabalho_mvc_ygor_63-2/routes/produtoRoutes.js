const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoController');

router.get('/', controller.listar);

router.post('/salvar', controller.criar);
router.post('/atualizar/:id', controller.atualizar);

router.get('/deletar/:id', controller.deletar);

module.exports = router;