const puppeteer = require('puppeteer');

const getImageWebsite = (req, res) => {
	var { URLSearch, formatsImage } = req.body;
	(async () => {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(URLSearch);

		// Get images
		const articles = await page.evaluate(() => {
			let imgs = document.querySelectorAll('img');
			imgs = [...imgs];
			let urlImgs = imgs.map(img => img.getAttribute('src'));
			return urlImgs;
		});

		let imgRes = [];

		// Check condition
		if (formatsImage && formatsImage.length) {
			formatsImage.forEach(format => {
				articles.forEach(image => {
					if (image.substring(image.length - 3, image.length) === format) {
						imgRes.push(image);
					}
				});
			});
		} else {
			imgRes.push(...articles);
		}

		// Return data
		res.json({urlImgs: imgRes});
		await browser.close();
	})();
};

module.exports = app => app.route('/api/get-image-website').post(getImageWebsite);
