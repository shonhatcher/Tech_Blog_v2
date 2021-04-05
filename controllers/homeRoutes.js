const router = require('express').Router();
//const {Project} = require('../models');

router.get ('/',  (req, res) => {
  console.log('This is the home page');
});

module.exports = router;