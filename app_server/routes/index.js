// Módulos
const express = require('express');
const router = express.Router();

// Controladores
const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;