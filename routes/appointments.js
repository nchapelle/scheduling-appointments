const express = require('express');
const router = express.Router();

// @route       GET api/appointments
// @desc        Get all of Appointments 
// @access      PRIVATE
router.get('/', (req, res) => {
    res.json({msg : 'Get all Appointments'})
});

// @route       POST api/appointments
// @desc        Add new Appts 
// @access      PRIVATE
router.post('/', (req, res) => {
    res.json({msg : 'Add New Appointments'})
});

// @route       PUT api/appointments/:id
// @desc        Update Appointment
// @access      PRIVATE
router.put('/:id', (req, res) => {
    res.json({msg : 'Change Appointment'})
});

// @route       DELETE api/appointments/:id
// @desc        Delete Appointment
// @access      PRIVATE
router.delete('/:id', (req, res) => {
    res.json({msg : 'Delete Appointment'})
});



module.exports = router
