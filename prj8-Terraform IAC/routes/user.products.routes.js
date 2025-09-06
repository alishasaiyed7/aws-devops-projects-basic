const express = require('express');
const router = express.Router();

const userProductController = require('../controllers/user.product.controller');

router.get('/', userProductController.findAll);
router.get('/:username', userProductController.findOne);
router.post('/', userProductController.create); 
router.patch('/:username', userProductController.update);
router.delete('/:username/products/:id', userProductController.delete);
router.get('/stats/stats1', userProductController.stats1);

module.exports = router;