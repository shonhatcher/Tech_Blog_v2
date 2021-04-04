const router = require('express').Router();
const router = require('express').Router();
const Project = require('../models');

router.get ('/',  (req, res) => {
    res.render('This is the home page');
});