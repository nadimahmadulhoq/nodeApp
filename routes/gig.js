const express = require('express');
const router = express.Router();
const Gig = require('../models/Gig');

router.get('/', (req, res) => {
	Gig.findAll()
		.then(gigs => {
			console.log(gigs);
			res.sendStatus(200);
		})
		.catch(err => console.log(err));
});

router.get('/add', (req, res) => {
	const gig = {
		title: 'looking for a fullstack developer.',
		technologies: 'nodeJs and mongodb',
		description: 'this is description... Loren ipsam dolor sit emet.Loren ipsam dolor sit emet.Loren ipsam dolor sit emet.Loren ipsam dolor sit emet.Loren ipsam dolor sit emet.Loren ipsam dolor sit emet.Loren ipsam dolor sit emet.Loren ipsam dolor sit emet.Loren ipsam dolor sit emet.Loren ipsam dolor sit emet.Loren ipsam dolor sit emet.Loren ipsam dolor sit emet.Loren ipsam dolor sit emet.Loren ipsam dolor sit emet.Loren ipsam dolor sit emet.',
		budget: '$3000',
		contactEmail: 'user2@gmail.com'
	}

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