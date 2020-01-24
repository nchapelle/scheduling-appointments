const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'I will succeed, at building this Appointment Scheduling API!'}));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/auth', require('./routes/auth'));


const PORT = process.env.PORT || 7676

app.listen(PORT, () => console.log(`App Server Online on Port: ${PORT}`));