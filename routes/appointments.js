const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Appointment = require('../models/Appointment');


// @route       GET api/appointments
// @desc        Get all of Appointments 
// @access      PRIVATE
router.get('/', auth, async (req, res) => {
    try {
        const Appointments = await Appointment.find({user: req.user.id}).sort({date: -1})
        res.json(Appointments)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

// @route       POST api/appointments
// @desc        Add new Appts 
// @access      PRIVATE
router.post('/', [auth, [
    check('phone', 'Area Code + Phone Number Required').isLength({min: 10, max: 10})
] ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {barber, availabilty, phone  } = req.body;
    try {
        const newAppointment = new Appointment({
            barber, 
            availabilty, 
            phone, 
            user: req.user.id
        });
        const appointment = await newAppointment.save()
        res.json(appointment)
    } catch (err) {
        console.error(err.message);
        res.status(500).json({msg : "Server Error"})
    }
});

// @route       PUT api/appointments/:id
// @desc        Update Appointment
// @access      PRIVATE
router.put('/:id', auth, async (req, res) => {
    res.json({msg : 'Change Appointment'})
});

// @route       DELETE api/appointments/:id
// @desc        Delete Appointment
// @access      PRIVATE
router.delete('/:id', auth, async (req, res) => {
    res.json({msg : 'Delete Appointment'})
});



module.exports = router
