const getImagesFromWebsite = (req, res) => {
	console.log('Get images from website.');
};

module.exports = app => app.route('/api/get-images-from-website').post(getImagesFromWebsite);
