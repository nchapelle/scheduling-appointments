const express = require('express');
const router = express.Router();

// @route       POST api/users
// @desc        Register a User
// @access      PUBLIC
router.post('/', (req, res) => {
    res.json({msg : 'Register A User'})
});

module.exports = router
