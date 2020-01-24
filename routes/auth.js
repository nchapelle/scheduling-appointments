const express = require('express');
const router = express.Router();

// @route       GET api/auth
// @desc        Get Logged in User
// @access      PRIVATE
router.get('/', (req, res) => {
    res.json({msg : 'Get Logged in User'})
});

// @route       POST api/auth
// @desc        Authenticate User and Get Token
// @access      PUBLIC
router.post('/', (req, res) => {
    res.json({msg : 'Log In User'})
});

module.exports = router
