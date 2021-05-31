const router = require('express').Router();
//const {Project} = require('../models');
// const withAuth = require('../utils/auth');



// router.get('/', function (req, res) {
//     res.send('Wiki home page');
    
router.get('/', async (req, res) => {
    try {
      // Pass serialized data and session flag into template
      res.render('homepage');
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.render('/profile', {
        logged_in: req.session.logged_in,
      });
      return;
    }
    res.render('login');
  });
  
  module.exports = router; 