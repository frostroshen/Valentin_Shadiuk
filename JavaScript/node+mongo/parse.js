const rq = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const url = "https://ek.ua/list/298/acer/";

rq(url, function(err, resp, html) { //REQUEST ek.ua
	if (!err) {
		parseData(html);

	} else throw(`Page with '${url}' is not found`);
});

function parseData(html, callback) { //PARSING DATA USING JQUERY
	const $ = cheerio.load(html);

	var output = {listings:[]};
	var count = $('.model-short-info').length;
	//ITERATING OVER PAGE LISTINGS
	for (i = 0; i < (count*2); i++) {
		output.listings.push({title: $('.model-conf-title a').eq(i).text()});
	};
	//WRITING TO JSON FILE
	fs.writeFile('acer.json', JSON.stringify(output.listings), function(err) {
		if (err) {
			return console.log(err);
		}
		return console.log('Created json file with parsed data');
	});
}
