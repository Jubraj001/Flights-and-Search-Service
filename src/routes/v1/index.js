const express = require('express');
const { create, update, destroy, get, getAll } = require('../../controllers/city-controller');

const router = express.Router();

router.post('/city', create);
router.delete('/city/:id', destroy);
router.patch('/city/:id', update);
router.get('/city', getAll);
router.get('/city/:id', get);

module.exports = router;
