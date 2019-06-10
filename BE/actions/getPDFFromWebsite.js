const getPDFFromWebsite = (req, res) => {
	console.log('Get PDF from website.');
};

module.exports = app => app.route('/api/get-PDF-from-website').post(getPDFFromWebsite);
