const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const AppointmentSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  barber: {
      type: String,
      default: 'Any'
  },
  availability: {
    type: String,
    required: true
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Appointment = mongoose.model('appointment', AppointmentSchema);
