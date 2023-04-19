//DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');

//CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
    //focus on hosting our node server and in turn, allowing our node server to give us the static files of our react app. in terminal run 'npm run build'. This minifies and optimizes our react app down into a build folder with a bunch of static files. Now we instruct our node server to serve up this build folder vvvv
app.use(express.static(path.join(__dirname, '../build')));

//CONTROLLERS
const animesController = require('./controllers/animes_controller');
app.use('/api/animes', animesController);

//LISTEN
app.listen(4005, () => {
    console.log('Server is running on port 4005');
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
})