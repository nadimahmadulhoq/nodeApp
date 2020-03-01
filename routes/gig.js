const express = require('express');
const router = express.Router();
const Gig = require('../models/Gig');

router.get('/', (req, res) => {
	Gig.findAll()
		.then(gigs => {
			res.render('gigs', {
				gigs
			});
		})
		.catch(err => console.log(err));
});

router.get('/add', (req, res) => {
	res.render('add');
	

	let {title, technologies, description, budget, contactEmail} = gig;

	Gig.create({
		title,
		technologies,
		description,
		budget,
		contactEmail
	}).then(gig => res.redirect('/gigs'))
	.catch(err => console.log(err));
});

module.exports = router;