// configuring the server
const express = require('express');
const connectDB = require('./config/db');
const app = express();
//pass:ns6PKRwCHBaRXrkB
//Connect to database(mongo)
connectDB();

app.get('/', (req,res) => res.send('Hi there, welcome to your online library'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));