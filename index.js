const express = require('express');
const xprhbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');

db.authenticate()
.then(() => {
	console.log("connection created.");
})
.catch(err => {
	console.log('Error: ' + err);
});

const app = express();

app.use('/gigs', require('./routes/gig'));

app.get('/', (req, res) => { 
	res.send(200);
	res.end();

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on oprt: ${PORT}`));