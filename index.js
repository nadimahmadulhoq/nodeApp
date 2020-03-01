const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');

//check database connection
db.authenticate()
.then(() => console.log("connection created."))
.catch(err => console.log('Error: ' + err));

const app = express();

//set view engine
app.set('view engine', 'ejs');

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//config router
app.use('/gigs', require('./routes/gig'));

app.get('/', (req, res) => { 
	res.render('home');

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on oprt: ${PORT}`));