const puppeteer = require('puppeteer');

const getImageWebsite = (req, res) => {
	const { URLSearch } = req.body;

	(async () => {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(URLSearch);

		const articles = await page.evaluate(() => {
			let imgs = document.querySelectorAll('img');
			imgs = [...imgs];
			let urlImgs = imgs.map(img => img.getAttribute('src'));
			return urlImgs;
		});
		res.json({urlImgs: articles});
		await browser.close();
	})();
};

module.exports = app => app.route('/api/get-image-website').post(getImageWebsite);
