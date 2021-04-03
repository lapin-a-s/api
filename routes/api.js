const express  = require('express');
const router = express.Router();
const Services = require('../models/Services');
router.get('services');
Services.methods(['get', 'put', 'post', 'delete']);
Services.register(router, '');

module.exports = router;