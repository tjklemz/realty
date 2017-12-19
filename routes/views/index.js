var keystone = require('keystone');

function optional(val) {
	if (+val === 4) {
		return {$gte: 4};
	}
	if (+val === 'any') {
		return undefined;
	}
	return +val;
}

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	var search = {}

	if (req.query.mlsid) {
		search.mlsid = req.query.mlsid;
	}
	if (req.query.suburb) {
		search.suburb = req.query.suburb;
	}
	if (req.query.squarefeet) {
		search.squareFeet = {$gte: req.query.squarefeet};
	}
	if (optional(req.query.bedrooms)) {
		search.bedrooms = optional(req.query.bedrooms);
	}
	if (optional(req.query.bathrooms)) {
		search.bathrooms = optional(req.query.bathrooms);
	}

	view.query('properties', keystone.list('Property').model.find(search).sort('sortOrder'));

	// Render the view
	view.render('index');
};
