const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();

// DB Config
const db = require('./config/db');
mongoose.connect(db.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: db.mongoURI })
}));

// Routes
app.use('/', require('./routes/dashboard'));
app.use('/auth', require('./routes/auth'));
app.use('/devices', require('./routes/devices'));
app.use('/departments', require('./routes/departments'));
app.use('/repairs', require('./routes/repairs'));
app.use('/users', require('./routes/users'));
app.use('/settings', require('./routes/settings'));
app.use('/profile', require('./routes/profile'));

// Home
app.get('/', (req, res) => res.render('index'));
app.get('/', (req, res) => {
    res.send('<h1>ทดสอบการแสดงผล</h1>');
});


// Start
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
